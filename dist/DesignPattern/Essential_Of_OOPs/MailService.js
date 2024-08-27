"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
class MailService {
    sendEmail() {
        this.connect();
        this.authenticate();
        console.log('Sending...');
        this.disconnect();
    }
    connect() {
        console.log('Connect...');
    }
    disconnect() {
        console.log('Disconnect...');
    }
    authenticate() {
        console.log('Authenticate...');
    }
}
exports.MailService = MailService;
class Main {
    static main() {
        const mailService = new MailService();
        mailService.sendEmail();
    }
}
Main.main();
//# sourceMappingURL=MailService.js.map