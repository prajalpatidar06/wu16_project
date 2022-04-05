module.exports.regex = (type, data) => {
  const regex = {
    // This email regex is not fully RFC5322-compliant, but it will validate most common email address formats correctly.
    //Email regex
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    // Test IP Addresses with this regular expression.
    //IP address regex
    ipAddress:
      /^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/,

    // Test for a strong password with this regex. The password must contain one lowercase letter, one uppercase letter, one number, and be at least 6 characters long.
    //Password regex
    password6LUN: /^(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*$/,

    // This URL regex will validate most common URL formats correctly.
    //URL regex
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
  };

  if (type === "email") {
    if (regex.email.test(data)) {
      return true;
    } else {
      return false;
    }
  } else if (type === "ipAddress") {
    if (regex.ipAddress.test(data)) {
      return true;
    } else {
      return false;
    }
  } else if (type === "password6LUN") {
    if (regex.password6LUN.test(data)) {
      return true;
    } else {
      return false;
    }
  } else if (type === "url") {
    if (regex.url.test(data)) {
      return true;
    } else {
      return false;
    }
  }
};
