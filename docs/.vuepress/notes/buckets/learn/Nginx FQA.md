
```
nginx

To use the correct configuration run 'nginx -p "$env:NGINX_HOME"' or 'nginx -p "%NGINX_HOME%"'

tasklist /fi  "imagename eq nginx.exe"
taskkill /f /pid 11904


configure arguments: --with-cc=cl --builddir=objs.msvc8 --with-debug --prefix= --conf-path=conf/nginx.conf --pid-path=logs/nginx.pid --http-log-path=logs/access.log --error-log-path=logs/error.log --sbin-path=nginx.exe --http-client-body-temp-path=temp/client_body_temp --http-proxy-temp-path=temp/proxy_temp --http-fastcgi-temp-path=temp/fastcgi_temp --http-scgi-temp-path=temp/scgi_temp --http-uwsgi-temp-path=temp/uwsgi_temp --with-cc-opt=-DFD_SETSIZE=1024 --with-pcre=objs.msvc8/lib/pcre2-10.39 --with-zlib=objs.msvc8/lib/zlib-1.2.11 --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_sub_module --with-http_dav_module --with-http_stub_status_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_slice_module --with-mail --with-stream --with-openssl=objs.msvc8/lib/openssl-1.1.1m --with-openssl-opt='no-asm no-tests -D_WIN32_WINNT=0x0501' --with-http_ssl_module --with-mail_ssl_module --with-stream_ssl_module

wacs

nginx

- https://www.jianshu.com/p/d8a8e64be1f5
- https://segmentfault.com/a/1190000039135687
- https://blog.51cto.com/u_15127623/3311467
- https://blog.51cto.com/u_15329153/3370901


server {
        listen          80;
        server_name     0.0.0.0:80 course.zm-class.com;
        root            /opt/tars/apps/13901/current;
        access_log      /opt/nginx_log/13901/course-sass.net_access.log jsonlog;
        location /sass-ops-h5 {
          try_files $uri $uri/ /index.html;
          index  index.html;
        }
}
```