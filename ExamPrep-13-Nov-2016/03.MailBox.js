class MailBox {
    constructor() {
        this.mails = [];
    }

    addMessage(subject, text) {
        this.mails.push([subject, text]);
        return this;
    }

    get messageCount() {
        return this.mails.length;
    }

    deleteAllMessages() {
        this.mails.length = 0;
    }

    findBySubject(substr) {
        let result = [];
        for (let mail of this.mails) {
            let [subj, text] = mail;
            if (subj.indexOf(substr) !== -1) {
                result.push({subject: subj, text: text});
            }
        }
        return result;
    }

    toString() {
        if (this.mails.length > 0) {
            return this.mails.map(msg => `* [${msg[0]}] ${msg[1]}`).join("\n");
        }
        return `* (empty mailbox)`
    }
}

