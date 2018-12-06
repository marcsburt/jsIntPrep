class Marc {
  constructor(first_name) {
    this.first_name = first_name;
    this.last_name = "Burt";
  }

  sayMyName() {
    console.log(this.first_name, this.last_name);
  }
}

class Professional extends Marc {
  constructor(honorific, first_name) {
    super(first_name);
    this.honorific = honorific;
  }

  sayMyProName() {
    console.log(this.honorific, this.first_name, this.last_name);
  }
}

const me = new Professional("Mr.", "Marc");
me.sayMyName();
me.sayMyProName();

const meNoPro = new Marc("Just Marc");
meNoPro.sayMyName();
