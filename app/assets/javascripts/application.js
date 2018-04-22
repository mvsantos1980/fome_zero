// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function modalShow(modalId) {
    console.log(modalId);
    $(modalId).show(modalId);

}

function modalHide(modalID) {
    $(modalID).hide();
}

function hide(event) {
    if (event) {
        event.preventDefault()
    }

    if (this._isTransitioning || !this._isShown) {
        return
    }

    const hideEvent = $.Event(Event.HIDE)

    $(this._element).trigger(hideEvent)

    if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
    }

    this._isShown = false
    const transition = $(this._element).hasClass(ClassName.FADE)

    if (transition) {
        this._isTransitioning = true
    }

    this._setEscapeEvent()
    this._setResizeEvent()

    $(document).off(Event.FOCUSIN)

    $(this._element).removeClass(ClassName.SHOW)

    $(this._element).off(Event.CLICK_DISMISS)
    $(this._dialog).off(Event.MOUSEDOWN_DISMISS)


    if (transition) {
        const transitionDuration  = Util.getTransitionDurationFromElement(this._element)

        $(this._element)
            .one(Util.TRANSITION_END, (event) => this._hideModal(event))
            .emulateTransitionEnd(transitionDuration)
    } else {
        this._hideModal()
    }
}

function show(relatedTarget) {
    if (this._isTransitioning || this._isShown) {
        return
    }

    if ($(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true
    }

    const showEvent = $.Event(Event.SHOW, {
        relatedTarget
    })

    $(this._element).trigger(showEvent)

    if (this._isShown || showEvent.isDefaultPrevented()) {
        return
    }

    this._isShown = true

    this._checkScrollbar()
    this._setScrollbar()

    this._adjustDialog()

    $(document.body).addClass(ClassName.OPEN)

    this._setEscapeEvent()
    this._setResizeEvent()

    $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        (event) => this.hide(event)
    )

    $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
            if ($(event.target).is(this._element)) {
                this._ignoreBackdropClick = true
            }
        })
    })

    this._showBackdrop(() => this._showElement(relatedTarget))
}

