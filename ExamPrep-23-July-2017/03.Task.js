class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get isOverdue() {
        return this.deadline < Date.now();
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(val) {
        if (val < Date.now()) {
            throw new Error();
        }
        this._deadline = val;
    }

    get icon() {
        let icon = "";
        this.status === "Open" ? icon = "\u2731" :
            this.status === "In Progress" ? icon = "\u219D" :
                this.status === "Complete" ? icon = "\u2714" :
                    icon = "\u26A0";
        return icon;
    }

    toString() {
        if (this.isOverdue) {
            return `[${this.icon}] ${this.title} (overdue)`
        } else if (this.status === "Complete") {
            return `[${this.icon}] ${this.title}`
        } else {
            return `[${this.icon}] ${this.title} {(deadline: ${this._deadline.toString()})}`
        }
    }

    get rank() {
        if (this.isOverdue && this.status !== "Complete") {
            return 0;
        } else if (this.status === "In Progress") {
            return 1;
        } else if (this.status === "Open") {
            return 2;
        } else {
            return 3;
        }
    }

    static comparator(a, b) {
        let num = a.rank - b.rank;

        if (num === 0) {
            return a._deadline - b._deadline;
        }
        return num;
    }
}