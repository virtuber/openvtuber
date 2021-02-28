from collections import deque
from numpy import median


class OutputFilter:
    def __init__(self, hist_len=5):
        self.history = deque(maxlen=hist_len)

        # currently setup for filtering control and not ml
        # this set determines which values to not filter
        # usually you would probably want to avoid filtering
        # things like blinking or other rapid movements.
        # You may also need to change tests
        self.exclusion_set = {2, 3}

    def median_filter(self, item_full):
        """
        first element in list is index, careful to not use in calcs
        """
        if item_full[0] in self.exclusion_set:
            return item_full[-1]

        item = item_full[1:]
        return median(item)

    def get_filtered_val(self, in_tuple):
        """
        takes in the tuple of values to filter, outputs a filtered tuple
        """

        self.history.append(in_tuple)
        zipped = zip(*self.history)
        zipped = map(lambda t: list(t), zipped)
        zipped = map(lambda t, c: [c] + t, zipped, range(len(in_tuple)))
        zipped = tuple(map(self.median_filter, zipped))

        return zipped
