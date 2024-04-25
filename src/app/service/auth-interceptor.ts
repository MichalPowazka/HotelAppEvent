import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("hotelUser");
                console.log(idToken)
        if (idToken) {
            const headers = req.headers.set('Authorization', `Bearer ${idToken}`);
            const authRequest = req.clone({ headers });
            return next.handle(authRequest);
          }
        
        else {
            return next.handle(req);
        }
    }
}

