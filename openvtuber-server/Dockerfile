FROM python:3.7-buster

WORKDIR /app
COPY requirements.txt requirements.txt

RUN apt-get update \
    && apt-get install -y \
    wget \
    unzip \
    cmake \
    build-essential \
    pkg-config \
    ca-certificates \
    libpng-dev \
    libjpeg-dev \
    libgif-dev \
    libopenblas-dev \
    libx11-dev \
    libgl1-mesa-glx \
    && rm -rf /var/lib/apt/lists/* \
    && pip install -r requirements.txt \
    && pip install pyinstaller


#COPY build-requirements.txt build-requirements.txt

#RUN pip install -r build-requirements.txt

COPY . .

RUN python setup.py develop 

WORKDIR /app/src

RUN pyinstaller __main__.spec

#ENTRYPOINT /app/src/dist/__main__/__main__
#EXPOSE 42069/tcp
#EXPOSE 17701/tcp
