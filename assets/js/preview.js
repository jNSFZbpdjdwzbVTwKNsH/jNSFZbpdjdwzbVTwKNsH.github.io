class Hr {
    constructor() {
        this.top = document.getElementById('top');
        this.bottom = document.getElementById('bottom');
    }

    hrs() {
        return Array.from(document.querySelectorAll('hr'))
    }

    update(pos = 0) {
        if (this.next(pos)) {
            this.bottom.style.display = 'block';
        } else {
            this.bottom.style.display = 'none';
        }

        if (this.previous(pos)) {
            this.top.style.display = 'block';
        } else {
            this.top.style.display = 'none';
        }
    }

    next(pos = 0) {
        let hrs = this.hrs()
            .filter(hr => hr.getBoundingClientRect().top > pos);

        if (this.hrs().length > 0) {
            return hrs[0];
        }
        return null;
    }

    previous(pos = 0) {
        let hrs = this.hrs()
            .reverse()
            .filter(hr => hr.getBoundingClientRect().top < pos);

        if (hrs.length > 1) {
            return hrs[1];
        }
        return null;
    }

    focus(elm) {
        let hrPosition = elm.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = hrPosition + elm.offsetHeight;
        this.update(offsetPosition - window.scrollY);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    focus_next() {
        if (this.next()) {
            this.focus(this.next());
        }
    }

    focus_previous() {
        if (this.previous()) {
            this.focus(this.previous());
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var hr = new Hr();

    document.getElementById('top').addEventListener('click', function() {
        hr.focus_previous()
    })

    let bottom = document.getElementById('bottom')
    bottom.addEventListener('click', function() {
        hr.focus_next()
    })

    document.addEventListener('keydown', function(event) {
        preventDefault = ['j', 'k', 'ArrowDown', 'ArrowUp']
        if (preventDefault.includes(event.key)) {
            event.preventDefault();
        }
        switch (event.key) {
            case 'j':
                hr.focus_next()
                break;
            case 'k':
                hr.focus_previous()
                break;
            case 'ArrowDown':
                hr.focus_next()
                break;
            case 'ArrowUp':
                hr.focus_previous()
                break;
        }

    })
})