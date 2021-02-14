from openvtuber.ml.posenet import argmax2d
import torch


class TestArgMax2d:
    def test_221(self):
        input = torch.LongTensor(
            [[[1],
              [2]],

             [[0],
              [3]]])
        result = argmax2d(input)
        expected_result = torch.LongTensor([[1, 1]])
        assert torch.equal(result, expected_result)

    def test_331(self):
        input = torch.LongTensor([[[1],
                                   [2],
                                   [0]],

                                  [[3],
                                   [4],
                                   [-1]],

                                  [[2],
                                   [9],
                                   [6]]])

        input2 = torch.Tensor([[[0.5],
                                [0.2],
                                [0.9]],

                               [[4.3000002],
                                [0.2],
                                [0.7]],

                               [[0.6],
                                [-0.11],
                                [1.4]]])
        result = argmax2d(input)
        result2 = argmax2d(input2)
        expected_result = torch.LongTensor([[2, 1]])
        expected_result2 = torch.LongTensor([[1, 0]])
        assert torch.equal(result, expected_result)
        assert torch.equal(result2, expected_result2)

    def test_333(self):
        input1 = torch.LongTensor([[[1],
                                    [2],
                                    [0]],

                                   [[3],
                                    [4],
                                    [-1]],

                                   [[2],
                                    [9],
                                    [6]]])

        input2 = torch.Tensor([[[0.5],
                                [0.2],
                                [0.9]],

                               [[4.3000002],
                                [0.2],
                                [0.7]],

                               [[0.6],
                                [-0.11],
                                [1.4]]])

        input3 = torch.Tensor([[[4],
                                [0.2],
                                [0.8]],

                               [[0.1],
                                [6],
                                [0.6]],

                               [[0.3],
                                [11],
                                [0.6]]])

        input = torch.cat((input1, input2, input3), 2)

        result = argmax2d(input)

        expected_result = torch.LongTensor([[2, 1],
                                            [1, 0],
                                            [2, 1]])
        assert torch.equal(result, expected_result)
