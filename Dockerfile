FROM node:16 as NODE_BUILDER

WORKDIR /opt/elenchus

# install dependencies
COPY package.json yarn.lock tsconfig.json babel-plugin-macros.config.js babel.config.js ./
RUN yarn install

# copy required files to build the app
COPY public ./public
COPY src ./src

RUN yarn build

FROM nginx

# remove default nginx stuff
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*

# copy build folder and nginx config
COPY --from=NODE_BUILDER /opt/elenchus/build /usr/share/nginx/html/elenchus
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80