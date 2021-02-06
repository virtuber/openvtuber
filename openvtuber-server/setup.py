from setuptools import setup, find_packages
from Cython.Build import cythonize


setup(
    name='openvtuber',
    version='0.1',
    url='https://github.com/virtuber/openvtuber',
    ext_modules=cythonize(["**/*.pyx"]),
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    install_requires=[
        'dlib',
        'numpy',
        'opencv-python',
        'rx',
        'protobuf',
        'requests',
        'websockets',
        'click',
        'matplotlib',
        'Cython',
        'fastapi',
        'uvicorn',
        'aiofiles'
    ],
    tests_require=['flake8', 'pytest-cov', 'mypy', 'pytest'],
    extras_require={
        'tests': ['flake8', 'pytest-cov', 'mypy', 'pytest'],
    },
    classifiers=["Programming Language :: Python :: 3", "Operating System :: OS Independent"],
    entry_points={
        'console_scripts': ['openvtuber = openvtuber.lib:main']
    },
)
