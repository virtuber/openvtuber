from setuptools import setup, find_packages


setup(
    name='openvtuber',
    version='0.1',
    url='https://github.com/virtuber/openvtuber',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    install_requires=[
        'dlib',
        'numpy',
        'opencv-python',
        'rx',
        'flask',
        'protobuf',
        'requests',
        'websockets',
        'click'
    ],
    tests_require=['flake8', 'pytest-cov', 'mypy', 'pytest'],
    extras_require={
        'tests': ['flake8', 'pytest-cov', 'mypy', 'pytest'],
    },
    classifiers=["Programming Language :: Python :: 3", "Operating System :: OS Independent"]
)
