from setuptools import setup, find_packages


setup(
    name='openvtuber',
    version='0.1',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    install_requires=[],
    tests_require=['flake8', 'pytest-cov', 'mypy', 'pytest'],
    extras_require={
        'tests': ['flake8', 'pytest-cov', 'mypy', 'pytest'],
    },
)
