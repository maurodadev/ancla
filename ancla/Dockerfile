#FROM is the base image for which we will run our application
FROM httpd:latest

# Copy files and directories from the application
COPY .firebase/ /usr/local/apache2/htdocs/.firebase/
COPY app/ /usr/local/apache2/htdocs/app/
COPY bootstrap/ /usr/local/apache2/htdocs/bootstrap/
COPY config/ /usr/local/apache2/htdocs/config/
COPY database/ /usr/local/apache2/htdocs/database/
COPY node_modules/ /usr/local/apache2/htdocs/node_modules/
COPY public/ /usr/local/apache2/htdocs/public/
COPY resources/ /usr/local/apache2/htdocs/resources/
COPY routes/ /usr/local/apache2/htdocs/routes/
COPY storage/ /usr/local/apache2/htdocs/storage/
COPY tests/ /usr/local/apache2/htdocs/tests/
COPY vendor/ /usr/local/apache2/htdocs/vendor/
COPY .editorconfig /usr/local/apache2/htdocs/.editorconfig
COPY .env /usr/local/apache2/htdocs/.env
COPY .env.example /usr/local/apache2/htdocs/.env.example
COPY .gitattributes /usr/local/apache2/htdocs/.gitattributes
COPY .gitignore /usr/local/apache2/htdocs/.gitignore
COPY .htaccess /usr/local/apache2/htdocs/.htaccess
COPY .styleci.yml /usr/local/apache2/htdocs/.styleci.yml
COPY artisan /usr/local/apache2/htdocs/artisan
COPY composer.json /usr/local/apache2/htdocs/composer.json
COPY composer.lock /usr/local/apache2/htdocs/composer.lock
COPY firebase.json /usr/local/apache2/htdocs/firebase.json
COPY laravel.log /usr/local/apache2/htdocs/laravel.log
COPY package-lock.json /usr/local/apache2/htdocs/package-lock.json
COPY package.json /usr/local/apache2/htdocs/package.json
COPY phpunit.xml /usr/local/apache2/htdocs/phpunit.xml
COPY README.md /usr/local/apache2/htdocs/README.md
COPY server.php /usr/local/apache2/htdocs/server.php
COPY symlinkcreate.php /usr/local/apache2/htdocs/symlinkcreate.php
COPY webpack.mix.js /usr/local/apache2/htdocs/webpack.mix.js

# Tell Docker we are going to use this port
EXPOSE 80