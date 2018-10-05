declare module "django-channels" {

    export class WebSocketBridge {

        connect(url: string, protocols: string[] | string, options: any): void;

        listen(cb: any): void;

        demultiplex(stream: string, cb: any): void;

        send(msg: any): void;

        stream(stream: string): any;

    }
}