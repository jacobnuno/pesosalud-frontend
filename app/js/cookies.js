class Cookies {
  static setCookie(cookieName, cookieValue, cookieExdays) {
    const d = new Date();
    d.setTime(d.getTime() + (cookieExdays * 24 * 60 * 60 * 1000));
    let expires = 'expires='+ d.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
    window.location.replace('../index.html');
  }

  static hasSession() {
    let token = this.getCookie('session-token');
    if(token === undefined || token == null) {
      window.location.replace('./index.html');
    }
  }

  static getCookie(cookieName) {
    var name = cookieName + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i += 1) {
        var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}

export default Cookies;
