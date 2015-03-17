/// <reference path="scripts/perfectwidgets.d.ts" />
/// <reference path="scripts/widgetjson.ts" />
interface Dictionary<T> {
    [key: string]: T;
}

class TesterControl {
    slider: PerfectWidgets.Model.BaseElements.Slider;
    valueTextBox: HTMLInputElement;
    constructor(sliderTest: PerfectWidgets.Model.BaseElements.Slider, textBox: HTMLInputElement) {
        this.slider = sliderTest;
        this.slider.addValueChangedHandler(this.updateTextBox.bind(this));
        this.valueTextBox = textBox;
    }
    updateSlider() {
        this.slider.setValue(parseFloat(this.valueTextBox.value), true)
    }
    updateTextBox() {
        this.valueTextBox.value = this.slider.getValue().toString();
    }
}

class WidgetDemo {

    widget: PerfectWidgets.Widget;
    testerContols: Dictionary<TesterControl>;
    animationIntervalId: number;

    constructor(id: string) {
        this.widget = new PerfectWidgets.Widget(id, WidgetJson.Widget1);
        this.testerContols = {};
    }

    addTesterControl(sliderId: string, textBoxId: string, updateButtonId: string) {
        var testerControl = new TesterControl(<PerfectWidgets.Model.BaseElements.Slider> this.widget.getByName(sliderId), <HTMLInputElement> document.getElementById(textBoxId));
        document.getElementById(updateButtonId).addEventListener("click", testerControl.updateSlider.bind(testerControl));
        this.testerContols[sliderId] = testerControl;
    }

    startAnimation() {
        this.stopAnimation();
        this.animationIntervalId = setInterval(this.animate.bind(this), 2000);
    }

    stopAnimation() {
        clearInterval(this.animationIntervalId);
    }

    animate() {
        for (var id in this.testerContols) {
            this.testerContols[id].slider.setValue(Math.floor((Math.random() * 40) + 1), true);
        }
    }

}

window.onload = () => {
    var demo = new WidgetDemo("root");
    demo.addTesterControl("Slider1", "valueTextBox1", "updateButton1");
    demo.addTesterControl("Slider2", "valueTextBox2", "updateButton2");
    demo.startAnimation();
    document.getElementById("startAnimationButton").addEventListener("click", demo.startAnimation.bind(demo));
    document.getElementById("stopAnimationButton").addEventListener("click", demo.stopAnimation.bind(demo));
    document.getElementById("nowYear").innerText = (new Date()).getFullYear().toString();
};