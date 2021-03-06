---
id: ml
title: Facial Detection, Tracking, and Landmarking
---

The ML module performs facial detection, tracking, and landmarking (in that order) on the image input it receives. One can find all the functions related to image and facial processing in the Inference class in `ml.py`. The core logic is within the infer_image function at the bottom. It takes an image and transforms it, producing a tuple containing measurements about the face.  

## Inference

The inference process contains four steps, the first step is the initialisation process. The inference module relies heavily on dlib functions for much of its actual core actions, many of which need prior initialisation or preparation of some sort.  

The next part is where it actually takes in an image and begins the processing. It will look for a face in the image. If a face is not found, it will not go through with the remaining steps. Dlib functions performs the calculations for this part and this is probably the slowest part of the algorithm. Although there are other choices available online for this part, dlib is one of the most well known and most used.  

If it finds a face, it will take the cut out of the image that contains just the face and record its position. The algorithm does this so that it does not have to perform facial detection on every frame. This is because by recording past frames, we can actually use linear extrapolation to predict future face locations. Since facial detection is the slowest part in this entire algorithm, by being able to skip it occasionally, you can see noticeable performance boosts. In the current implementation, the algorithm skips every second frame and replaces it with this linear extrapolation approach.  

Once the algorithm detects a face, it crops and isolates the face so that it can then perform facial landmarking. This increases the accuracy and speed of the facial landmarking procedure tremendously. This process also takes advantage of an algorithm available through dlib that performs facial landmarking using 68 points.  

With the face landmarked, one can now use the points to calculate facial metrics.  

The entire process and algorithm is in the infer_image function at the bottom of `ml.py`.  

## Inference Output

**infer_image(image)**  
**Input**: 2D numpy array that represents an image  
**Output**: tuple of elements
 - roll
 - pitch
 - yaw
 - ear_left
 - ear_right
 - mar
 - mdst
 - left_iris
 - right_iris


### Roll, Pitch, Yaw
These refer to the orientation of the head (in degrees). All three measurements start at a base line where 0 degrees is the subject staring straight into the camera.

### ear_left, ear_right
Eye aspect ratio or ear is a measurement of how open an eye is. Values usually range from 0 to 0.4 where closed is 0 and very open is 0.4.

### mar
Mouth aspect ratio or mar is a measurement of how open the mouth is. Values usually range from 0 to 1 (although it will sometimes cross 1) where closed is 0 and open is 1.  

### mdst
Mouth distance or mdst is a measure of the horizontal length of the mouth. (Think of it like a very wide smile versus a puckered kissing action). Values will usually range from 0.2 to 0.5 (although it may cross those boundaries on either side) where 0.2 is a very tight mouth and 0.5 is a very wide mouth.

### left_iris, right_iris
These two iris measurements are not actually numbers but instead an array or collection of four other numbers.  

The first two of which are the raw x and y coordinates of the iris in relation to the rest of the image. These two numbers are probably not going to be very useful for most cases except for debugging. The coordinate (0, 0) is the upper left hand of the image.  

The next two of which are the left and up ratio values of the pupil. These represent how much to any direction the iris is pointing. The left ratio of the eye determines how much to the left the eye is pointing where 0 is very left and 1 is very right. The up ratio of the eye determines how upwards the eye is pointing where 0 is very down and 1 is very up.


**\*Note**: If it does not find a face, the function returns None instead.
