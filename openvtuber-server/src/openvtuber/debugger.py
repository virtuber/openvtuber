import multiprocessing
from matplotlib import pyplot as plt
import time
from multiprocessing import Process
import matplotlib.animation as animation


class Debugger:
    def __init__(self, graphtrim):
        self.queue = multiprocessing.Queue()

        self.start_time = time.perf_counter()

        self.p = Process(target=self.do_plot, args=(self.queue, graphtrim))
        self.p.start()

    def debug_print(self, data):
        if data is not None:
            (roll, pitch, yaw, ear_left, ear_right,
                mar, mdst, left_iris, right_iris) = data
            # print(roll, pitch, yaw)
            # print(data)

            # Telemetry update
            self.queue.put((time.perf_counter() - self.start_time,) + data)

            with open("debug.log", "a") as f:
                f.write(",".join([str(time.perf_counter_ns() - self.start_time),
                                  str(roll), str(pitch),
                                  str(yaw), str(ear_left),
                                  str(ear_right), str(mar),
                                  str(mdst),
                                  str(left_iris[0]), str(left_iris[1]),
                                  str(left_iris[2]), str(left_iris[3]),
                                  str(right_iris[0]), str(right_iris[1]),
                                  str(right_iris[2]), str(right_iris[3])]) + "\n")
        # else:
        #     print(None)

    def do_plot(self, queue, graphtrim):

        times = [0]
        arr_roll = [0]
        arr_pitch = [0]
        arr_yaw = [0]
        arr_ear_left = [0]
        arr_ear_right = [0]
        arr_mar = [0]
        arr_mdst = [0]
        arr_left_iris0 = [0]
        arr_left_iris1 = [0]
        arr_left_iris2 = [0]
        arr_left_iris3 = [0]
        arr_right_iris0 = [0]
        arr_right_iris1 = [0]
        arr_right_iris2 = [0]
        arr_right_iris3 = [0]

        # Initializing Plot
        fig = plt.figure("Telemetry", figsize=(12, 6))

        ax1 = fig.add_subplot(2, 3, (1, 2))
        ax1.set_title("Pitch/Yaw/Roll")
        ax1.set_ylim([-90, 90])
        ax1.get_xaxis().set_visible(False)

        ax2 = fig.add_subplot(233)
        ax2.set_title("Ears")
        ax2.set_ylim([0, 1])
        ax2.get_xaxis().set_visible(False)

        ax3 = fig.add_subplot(234)
        ax3.set_title("mar")
        ax3.set_ylim([0, 1])
        ax3.get_xaxis().set_visible(False)

        ax4 = fig.add_subplot(235)
        ax4.set_title("mdst")
        ax4.set_ylim([0, 1])
        ax4.get_xaxis().set_visible(False)

        ax5 = fig.add_subplot(236)
        ax5.set_title("Iris 2,3")
        ax5.set_ylim([0, 1])
        ax5.get_xaxis().set_visible(False)

        series_roll, = ax1.plot([0], [0], label="Roll")
        series_pitch, = ax1.plot([0], [0], label="Pitch")
        series_yaw, = ax1.plot([0], [0], label="Yaw")
        ax1.legend()

        series_ear_left, = ax2.plot([0], [0], label="Left Ear")
        series_ear_right, = ax2.plot([0], [0], label="Right Ear")
        ax2.legend()

        series_mar, = ax3.plot([0], [0], label="mar")
        ax3.legend()

        series_mdst, = ax4.plot([0], [0], label="mdst")
        ax4.legend()

        series_left_iris2, = ax5.plot([0], [0], label="left 2")
        series_left_iris3, = ax5.plot([0], [0], label="left 3")
        series_right_iris2, = ax5.plot([0], [0], label="right 2")
        series_right_iris3, = ax5.plot([0], [0], label="right 3")
        ax5.legend()

        def animate(i):
            while not queue.empty():
                (time, roll, pitch, yaw, ear_left, ear_right,
                    mar, mdst, left_iris, right_iris) = queue.get()
                times.append(time)
                arr_roll.append(roll)
                arr_yaw.append(yaw)
                arr_pitch.append(pitch)
                arr_ear_left.append(ear_left)
                arr_ear_right.append(ear_right)
                arr_mar.append(mar)
                arr_mdst.append(mdst)
                arr_left_iris0.append(left_iris[0])
                arr_left_iris1.append(left_iris[1])
                arr_left_iris2.append(left_iris[2])
                arr_left_iris3.append(left_iris[3])
                arr_right_iris0.append(right_iris[0])
                arr_right_iris1.append(right_iris[1])
                arr_right_iris2.append(right_iris[2])
                arr_right_iris3.append(right_iris[3])

                if graphtrim:
                    # trim to see only most recent data
                    for arr in (times, arr_roll, arr_pitch, arr_yaw,
                                arr_ear_left, arr_ear_right, arr_mar,
                                arr_mdst, arr_left_iris0, arr_left_iris1,
                                arr_left_iris2, arr_left_iris3, arr_right_iris0,
                                arr_right_iris1, arr_right_iris2, arr_right_iris3):
                        if len(arr) > 200:
                            arr.pop(0)

                ax1.set_xlim([min(times), max(times)])
                ax2.set_xlim([min(times), max(times)])
                ax3.set_xlim([min(times), max(times)])
                ax4.set_xlim([min(times), max(times)])
                ax5.set_xlim([min(times), max(times)])

            series_roll.set_data(times, arr_roll)
            series_pitch.set_data(times, arr_pitch)
            series_yaw.set_data(times, arr_yaw)
            series_ear_left.set_data(times, arr_ear_left)
            series_ear_right.set_data(times, arr_ear_right)
            series_mar.set_data(times, arr_mar)
            series_mdst.set_data(times, arr_mdst)
            series_left_iris2.set_data(times, arr_left_iris2)
            series_left_iris3.set_data(times, arr_left_iris3)
            series_right_iris2.set_data(times, arr_right_iris2)
            series_right_iris3.set_data(times, arr_right_iris3)

            return (series_roll, series_pitch, series_yaw, series_ear_left, series_ear_right,
                    series_mar, series_mdst, series_left_iris2, series_left_iris3,
                    series_right_iris2, series_right_iris3)

        ani = animation.FuncAnimation(fig, animate, blit=True, interval=10)  # noqa: F841

        plt.show()
