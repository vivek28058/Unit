FROM ghcr.io/zaproxy/zaproxy:stable

# Create the directory
RUN mkdir -p /zap/wrk

# Change ownership of the directory
RUN chown -R zap:zap /zap/wrk

# Set the working directory
WORKDIR /zap/wrk
