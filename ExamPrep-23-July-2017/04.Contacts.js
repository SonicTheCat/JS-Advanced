class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(bool) {
        this._online = bool;

        if (bool) {
           this.element.find(".title").addClass("online");
        } else {
            this.element.find(".title").removeClass("online");
        }

    }

    render(id){
        $(`#${id}`).append(this.element);
    }

    createElement() {
        return ($("<article>")
            .append($("<div>")
                .addClass(`title`)
                .text(`${this.firstName} ${this.lastName}`)
                .append($("<button>&#8505;</button>")
                    .on("click", toggleInfo)))
            .append($("<div>")
                .addClass("info")
                .css("display", "none")
                .append($(`<span>&phone; ${this.phone}</span>`))
                .append($(`<span>&#9993; ${this.email}</span>`))));

        function toggleInfo() {
            let article = $(this).parent().parent()[0];
            let div = $(article).children(".info");
            if (div.css("display") === "none") {
                div.show()
            } else {
                div.hide()
            }
        }
    }
}

