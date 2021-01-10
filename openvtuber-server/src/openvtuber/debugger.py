from matplotlib import pyplot as plt
import time
from multiprocessing import Process
import matplotlib.animation as animation


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

series_roll = None
series_pitch = None
series_yaw = None
series_ear_left = None
series_ear_right = None
series_mar = None
series_mdst = None
series_left_iris0 = None
series_left_iris1 = None
series_left_iris2 = None
series_left_iris3 = None
series_right_iris0 = None
series_right_iris1 = None
series_right_iris2 = None
series_right_iris3 = None

fig = None
ax1 = None
ax2 = None
ax3 = None
ax4 = None
ax5 = None
ax6 = None


def debug_init():
    p = Process(target=do_plot, args=plotter_args())
    p.start()

def debug_print(data):
    if data is not None:
        (roll, pitch, yaw, ear_left, ear_right,
            mar, mdst, left_iris, right_iris) = data
        print(roll, pitch, yaw)

        # Telemetry update
        times.append(time.perf_counter())
        arr_roll.append(roll[0])
        arr_pitch.append(pitch[0])
        arr_yaw.append(yaw[0])
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

        with open("debug.log", "a") as f:
            f.write(",".join([str(time.perf_counter()),
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


def plotter_args():
    '''
    Returns plotter args as a tuple
    '''
    return (fig, times, arr_roll, arr_pitch, arr_yaw, arr_ear_left, arr_ear_right, arr_mar, arr_mdst, arr_left_iris0, arr_left_iris1, arr_left_iris2, arr_left_iris3, arr_right_iris0, arr_right_iris1, arr_right_iris2, arr_right_iris3,
    series_roll, series_pitch, series_yaw, series_ear_left, series_ear_right, series_mar, series_mdst, series_left_iris0, series_left_iris1, series_left_iris2, series_left_iris3, series_right_iris0, series_right_iris1, series_right_iris2, series_right_iris3)


def do_plot(fig, times, arr_roll, arr_pitch, arr_yaw, arr_ear_left, arr_ear_right, arr_mar, arr_mdst, arr_left_iris0, arr_left_iris1, arr_left_iris2, arr_left_iris3, arr_right_iris0, arr_right_iris1, arr_right_iris2, arr_right_iris3,
    series_roll, series_pitch, series_yaw, series_ear_left, series_ear_right, series_mar, series_mdst, series_left_iris0, series_left_iris1, series_left_iris2, series_left_iris3, series_right_iris0, series_right_iris1, series_right_iris2, series_right_iris3):

    # Initializing Plot
    fig = plt.figure("Telemetry", figsize=(12, 6))
    fig.tight_layout()
    ax1 = fig.add_subplot(231)
    ax1.set_title("Pitch/Yaw/Roll")

    ax2 = fig.add_subplot(232)
    ax2.set_title("Ears")

    ax3 = fig.add_subplot(233)
    ax3.set_title("mar")

    ax4 = fig.add_subplot(234)
    ax4.set_title("mdst")

    ax5 = fig.add_subplot(235)
    ax5.set_title("Left Iris")

    ax6 = fig.add_subplot(236)
    ax6.set_title("Right Iris")

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

    series_left_iris0, = ax5.plot([0], [0], label="0")
    series_left_iris1, = ax5.plot([0], [0], label="1")
    series_left_iris2, = ax5.plot([0], [0], label="2")
    series_left_iris3, = ax5.plot([0], [0], label="3")
    ax5.legend()

    series_right_iris0, = ax6.plot([0], [0], label="0")
    series_right_iris1, = ax6.plot([0], [0], label="1")
    series_right_iris2, = ax6.plot([0], [0], label="2")
    series_right_iris3, = ax6.plot([0], [0], label="3")

    ax6.legend()

    def animate(i):
        fig.tight_layout()
        series_roll.set_data(times, arr_roll)
        series_pitch.set_data(times, arr_pitch)
        series_yaw.set_data(times, arr_yaw)
        series_ear_left.set_data(times, arr_ear_left)
        series_ear_right.set_data(times, arr_ear_right)
        series_mar.set_data(times, arr_mar)
        series_mdst.set_data(times, arr_mdst)
        series_left_iris0.set_data(times, arr_left_iris0)
        series_left_iris1.set_data(times, arr_left_iris1)
        series_left_iris2.set_data(times, arr_left_iris2)
        series_left_iris3.set_data(times, arr_left_iris3)
        series_right_iris0.set_data(times, arr_right_iris0)
        series_right_iris1.set_data(times, arr_right_iris1)
        series_right_iris2.set_data(times, arr_right_iris2)
        series_right_iris3.set_data(times, arr_right_iris3)
        fig.canvas.draw_idle()

        return ()

    ani = animation.FuncAnimation(fig, animate, blit=True)

    plt.show()
