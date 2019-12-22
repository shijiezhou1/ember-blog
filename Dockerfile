FROM node:10.16.3
MAINTAINER Dan Lynn <docker@danlynn.org>

# ember server on port 4200
# livereload server on port 7020 (changed in v2.17.0 from 49153)
# test server on port 7357
EXPOSE 4200 7020 7357
WORKDIR /myapp

# run ember server on container start
CMD ["ember", "server"]
