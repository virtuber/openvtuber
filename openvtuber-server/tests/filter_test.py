import pytest
from openvtuber.control import OutputFilter


@pytest.mark.lib
def test_filter():
    f = OutputFilter(5)

    # test assumes first two vals are in excluded list,
    # if this is not the case, you will have to change tests to match
    assert(f.get_filtered_val((1, 1, 1, 2, 3)) == (1.0, 1.0, 1.0, 2.0, 3.0))
    assert(f.get_filtered_val((1, 1, 2, 3, 4)) == (1.0, 1.0, 2.0, 3.0, 3.5))
    assert(f.get_filtered_val((1, 1, 2, 3, 4)) == (1.0, 1.0, 2.0, 3.0, 4.0))
