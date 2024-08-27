// Abstraction is all about reducig complexity by hiding unnecessary details.

export class MailService {

    public sendEmail():void {
        this.connect();
        this.authenticate();
        // Send email
        console.log('Sending...');
        this.disconnect();
    }

    private connect():void {
        console.log('Connect...');
    }

    private disconnect():void {
        console.log('Disconnect...');
    }

    private authenticate() :void {
        console.log('Authenticate...');
    }

}


class Main {
    public static main():void {
        const mailService = new MailService();
        mailService.sendEmail();
    }
}

Main.main();







