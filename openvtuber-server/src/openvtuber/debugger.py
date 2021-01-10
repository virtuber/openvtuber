import multiprocessing
from matplotlib import pyplot as plt
import time
from multiprocessing import Process
import matplotlib.animation as animation


class Debugger:
    def __init__(self):
        self.q_times = multiprocessing.Queue()
        self.q_roll = multiprocessing.Queue()
        self.q_pitch = multiprocessing.Queue()
        self.q_yaw = multiprocessing.Queue()
        self.q_ear_left = multiprocessing.Queue()
        self.q_ear_right = multiprocessing.Queue()
        self.q_mar = multiprocessing.Queue()
        self.q_mdst = multiprocessing.Queue()
        self.q_left_iris0 = multiprocessing.Queue()
        self.q_left_iris1 = multiprocessing.Queue()
        self.q_left_iris2 = multiprocessing.Queue()
        self.q_left_iris3 = multiprocessing.Queue()
        self.q_right_iris0 = multiprocessing.Queue()
        self.q_right_iris1 = multiprocessing.Queue()
        self.q_right_iris2 = multiprocessing.Queue()
        self.q_right_iris3 = multiprocessing.Queue()

        self.start_time = time.perf_counter()

        self.p = Process(target=self.do_plot, args=self.plotter_args())
        self.p.start()

    def debug_print(self, data):
        if data is not None:
            (roll, pitch, yaw, ear_left, ear_right,
                mar, mdst, left_iris, right_iris) = data
            # print(roll, pitch, yaw)

            # Telemetry update
            self.q_times.put(time.perf_counter() - self.start_time)
            self.q_roll.put(roll[0])
            self.q_pitch.put(pitch[0])
            self.q_yaw.put(yaw[0])
            self.q_ear_left.put(ear_left)
            self.q_ear_right.put(ear_right)
            self.q_mar.put(mar)
            self.q_mdst.put(mdst)
            self.q_left_iris0.put(left_iris[0])
            self.q_left_iris1.put(left_iris[1])
            self.q_left_iris2.put(left_iris[2])
            self.q_left_iris3.put(left_iris[3])
            self.q_right_iris0.put(right_iris[0])
            self.q_right_iris1.put(right_iris[1])
            self.q_right_iris2.put(right_iris[2])
            self.q_right_iris3.put(right_iris[3])

            with open("debug.log", "a") as f:
                f.write(",".join([str(time.perf_counter_ns() - self.start_time),
                                  str(roll[0]), str(pitch[0]),
                                  str(yaw[0]), str(ear_left),
                                  str(ear_right), str(mar),
                                  str(mdst),
                                  str(left_iris[0]), str(left_iris[1]),
                                  str(left_iris[2]), str(left_iris[3]),
                                  str(right_iris[0]), str(right_iris[1]),
                                  str(right_iris[2]), str(right_iris[3])]) + "\n")
        else:
            print(None)

    def plotter_args(self):
        '''
        Returns plotter args as a tuple
        '''
        return (self.q_times, self.q_roll, self.q_pitch, self.q_yaw, self.q_ear_left,
            self.q_ear_right, self.q_mar, self.q_mdst, self.q_left_iris0, self.q_left_iris1,
            self.q_left_iris2, self.q_left_iris3, self.q_right_iris0, self.q_right_iris1,
            self.q_right_iris2, self.q_right_iris3)


    def do_plot(self, q_times, q_roll, q_pitch, q_yaw, q_ear_left, q_ear_right,
            q_mar, q_mdst, q_left_iris0, q_left_iris1, q_left_iris2,
            q_left_iris3, q_right_iris0, q_right_iris1, q_right_iris2, q_right_iris3):

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

        ax2 = fig.add_subplot(233)
        ax2.set_title("Ears")
        ax2.set_ylim([0, 1])

        ax3 = fig.add_subplot(234)
        ax3.set_title("mar")
        ax3.set_ylim([0, 1])

        ax4 = fig.add_subplot(235)
        ax4.set_title("mdst")
        ax4.set_ylim([0, 1])

        ax5 = fig.add_subplot(236)
        ax5.set_title("Iris 2,3")
        ax5.set_ylim([0, 1])

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
            ax1.set_xlim([0, max(times)])
            ax2.set_xlim([0, max(times)])
            ax3.set_xlim([0, max(times)])
            ax4.set_xlim([0, max(times)])
            ax5.set_xlim([0, max(times)])


            while not q_times.empty():
                times.append(q_times.get())
            while not q_roll.empty():
                arr_roll.append(q_roll.get())
            while not q_yaw.empty():
                arr_yaw.append(q_yaw.get())
            while not q_pitch.empty():
                arr_pitch.append(q_pitch.get())
            while not q_ear_left.empty():
                arr_ear_left.append(q_ear_left.get())
            while not q_ear_right.empty():
                arr_ear_right.append(q_ear_right.get())
            while not q_mar.empty():
                arr_mar.append(q_mar.get())
            while not q_mdst.empty():
                arr_mdst.append(q_mdst.get())

            while not q_left_iris0.empty():
                arr_left_iris0.append(q_left_iris0.get())
            while not q_left_iris1.empty():
                arr_left_iris1.append(q_left_iris1.get())
            while not q_left_iris2.empty():
                arr_left_iris2.append(q_left_iris2.get())
            while not q_left_iris3.empty():
                arr_left_iris3.append(q_left_iris3.get())

            while not q_right_iris0.empty():
                arr_right_iris0.append(q_right_iris0.get())
            while not q_right_iris1.empty():
                arr_right_iris1.append(q_right_iris1.get())
            while not q_right_iris2.empty():
                arr_right_iris2.append(q_right_iris2.get())
            while not q_right_iris3.empty():
                arr_right_iris3.append(q_right_iris3.get())

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

            fig.canvas.draw_idle()
            return ()

        ani = animation.FuncAnimation(fig, animate, blit=True)

        plt.show()
