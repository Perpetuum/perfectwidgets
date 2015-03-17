/// <reference path="scripts/perfectwidgets.d.ts" />
/// <reference path="scripts/widgetjson.ts" />

class KnockoutBindingHelper {
    static BindSliderByName(widget: PerfectWidgets.Widget, slider: string, observable: KnockoutObservable<number>) {
        var sliderObject = <PerfectWidgets.Model.BaseElements.Slider> widget.getByName(slider);
        this.BindSlider(sliderObject, observable);
    }
    static BindSlider(slider: PerfectWidgets.Model.BaseElements.Slider, observable: KnockoutObservable<number>) {
        slider.addValueChangedHandler(function () {
            observable(slider.getValue());
        });
        observable.subscribe(function (newValue) {
            slider.setValue(newValue, true);
        });
        observable(slider.getValue());
    }
}

class TesterControl {
    sliderValue: KnockoutObservable<number>;
    sliderName: KnockoutObservable<string>;
    constructor(widget: PerfectWidgets.Widget, sliderName: string) {
        this.sliderValue = ko.observable(0);
        this.sliderName = ko.observable(sliderName);
        KnockoutBindingHelper.BindSliderByName(widget, sliderName, this.sliderValue);
    }
}

class WidgetDemo {
    widget: PerfectWidgets.Widget;
    testerControls: KnockoutObservableArray<TesterControl>;
    animationIntervalId: number;

    constructor(id: string) {
        this.widget = new PerfectWidgets.Widget(id, WidgetJson.Widget1);
        this.testerControls = ko.observableArray<TesterControl>();
    }

    addTesterControl(sliderName: string) {
        var testerControl = new TesterControl(this.widget, sliderName);
        this.testerControls.push(testerControl);
    }

    startAnimation() {
        this.stopAnimation();
        this.animationIntervalId = setInterval(this.animate.bind(this), 2000);
    }

    stopAnimation() {
        clearInterval(this.animationIntervalId);
    }

    animate() {
        for (var i = 0; i < this.testerControls().length; i++) {
            this.testerControls()[i].sliderValue(Math.floor((Math.random() * 40) + 1));
        }
    }
}

window.onload = () => {
    var demo = new WidgetDemo("root");
    demo.addTesterControl("Slider1");
    demo.addTesterControl("Slider2");
    ko.applyBindings(demo);
    demo.startAnimation();
    document.getElementById("nowYear").innerText = (new Date()).getFullYear().toString();
    var heightEqualizers = document.getElementsByClassName('heightEqualizer');
    for (var i = 0; i < heightEqualizers.length; i++) {
        var node:HTMLBaseElement = <HTMLBaseElement> heightEqualizers[i];
        node.style.height = node.offsetHeight + 'px';
    }
};