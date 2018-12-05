class Cookies {
    static setCookie(cookieName, cookieValue, cookieExdays) {
        const d = new Date();
        d.setTime(d.getTime() + (cookieExdays * 24 * 60 * 60 * 1000));
        let expires = 'expires='+ d.toUTCString();
        document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
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
            return c.substring(name.length,c.length);
          }
        }
        return '';
      }

      static checkCookie() {
        var username = getCookie('username');
        if (username != '') {
          alert('Welcome again ' + username);
        } else {
          username = prompt('Please enter your name: ', '');
          if (username != '' && username != null) {
            setCookie('username', username, 365);
          }
        }
    }
}

export default Cookies;
