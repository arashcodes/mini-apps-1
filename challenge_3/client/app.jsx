class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0,
      form1: '',
      form2: '',
      form3: '',
    }
    this.nextPage = this.nextPage.bind(this);
    this.setForm1 = this.setForm1.bind(this);
    this.setForm2 = this.setForm2.bind(this);
    this.setForm3 = this.setForm3.bind(this);
  }

  nextPage() {
    let next = this.state.form + 1;
    this.setState({ form: next })
  }

  setForm1(input) {
    this.setState({ form1: input })
    // setTimeout(() => console.log('from App', this.state.form1), 2000);
  }
  setForm2(input) {
    this.setState({ form2: input })
    // setTimeout(() => console.log('from App', this.state.form2), 2000);
  }
  setForm3(input) {
    this.setState({ form3: input })
    // setTimeout(() => console.log('from App', this.state.form3), 2000);
  }

  render() {
    let curr = this.state.form;
    return (
      <div>
        {curr === 0 ? <Checkout nextPage={this.nextPage} /> : null }
        {curr === 1 ? <Form1 setForm1={this.setForm1} nextPage={this.nextPage} /> : null}
        {curr === 2 ? <Form2 setForm2={this.setForm2} nextPage={this.nextPage}  /> : null}
        {curr === 3 ? <Form3 setForm3={this.setForm3} nextPage={this.nextPage}  /> : null}
        {curr === 4 ? <Confirmation appState={this.state} nextPage={this.nextPage} /> : null}
      </div>
    )
  }
}

const Checkout = (props) => {
  return (
    <div>
      <h2>Click here when ready to checkout</h2>
      <button onClick={props.nextPage} >Checkout</button>
    </div>
  )
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setForm1(this.state);
    this.props.nextPage();
    this.setState({ name: '', email: '', password: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <lable>
          Name:
        <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          >
          </input>
        </lable>
        <br />
        <lable>
          Email:
        <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          >
          </input>
        </lable>
        <br />
        <lable>
          Password:
        <input
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          >
          </input>
        </lable>
        <br />
        <button type="Submit" >Next Page</button>
      </form>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setForm2(this.state);
    this.props.nextPage();
    this.setState({ line1: '', line2: '', city: '', state: '', zipCode: '', phone: '',})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        Address:
        <br />
        <lable>
          Line 1:
        <input
            name="line1"
            onChange={this.handleChange}
            value={this.state.line1}
          >
          </input>
        </lable>
        <br />
        <lable>
          Line 2:
        <input
            name="line2"
            onChange={this.handleChange}
            value={this.state.line2}
          >
          </input>
        </lable>
        <br />
        <lable>
          City:
        <input
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          >
          </input>
        </lable>
        <br />
        <lable>
          State:
        <input
            name="state"
            onChange={this.handleChange}
            value={this.state.state}
          >
          </input>
        </lable>
        <br />
        <lable>
          Zip Code:
        <input
            name="zipCode"
            onChange={this.handleChange}
            value={this.state.zipCode}
          >
          </input>
        </lable>
        <br />
        <lable>
          Phone Number:
        <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          >
          </input>
        </lable>
        <br />
        <button type="Submit" >Next Page</button>
      </form>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: '',
      date: '',
      cvv: '',
      billingZip: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setForm3(this.state);
    this.props.nextPage();
    this.setState({ credit: '', date: '', cvv: '', billingZip: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <lable>
          Credit Card #:
        <input
            name="credit"
            onChange={this.handleChange}
            value={this.state.credit}
          >
          </input>
        </lable>
        <br />
        <lable>
          Expiry Date:
        <input
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
          >
          </input>
        </lable>
        <br />
        <lable>
          CVV:
        <input
            name="cvv"
            onChange={this.handleChange}
            value={this.state.cvv}
          >
          </input>
        </lable>
        <br />
        <lable>
          Billing Zip Code:
        <input
            name="billingZip"
            onChange={this.handleChange}
            value={this.state.billingZip}
          >
          </input>
        </lable>
        <br />
        <button type="Submit" >Next Page</button>
      </form>
    )
  }
}

const Confirmation = (props) => {
  return(
    <div>
      summary
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
