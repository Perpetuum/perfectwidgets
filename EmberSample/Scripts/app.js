App = Ember.Application.create({});

var sliders = Ember.Object.extend({
  Slider1Value: 25,
  Slider2Value: 30
}).create({
  Slider1Value: 25,
  Slider2Value: 30
});

App.Router.map(function() {
  this.resource('widget', {path: '/'});
});

App.WidgetRoute = Ember.Route.extend({
  model: function() {
    return sliders;
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.send('startAnimation');
  }
});

App.WidgetController = Ember.ObjectController.extend({
  animationTimeoutId: 0,
  animate: function () {
    this.set('model.Slider1Value', Math.floor((Math.random() * 40) + 1));
    this.set('model.Slider2Value', Math.floor((Math.random() * 40) + 1));
    this.set('animationTimeoutId', setTimeout(this.get('animate').bind(this), 2000));
  },
  actions: {
    stopAnimation: function () {
      clearTimeout(this.get('animationTimeoutId'));
    },
    startAnimation: function () {
      this.send('stopAnimation');
      this.set('animationTimeoutId', setTimeout(this.get('animate').bind(this), 2000));
    }
  }
});

App.WidgetView = Ember.View.extend({
  templateName: 'widget',
  didInsertElement: function() {
    var widget = new PerfectWidgets.Widget("root", WidgetJson.Widget1);
    BindSlider(widget, "Slider1", sliders, "Slider1Value");
    BindSlider(widget, "Slider2", sliders, "Slider2Value");
  }
});

function BindSlider(widget, sliderName, observable, property) {
  var sliderObject = widget.getByName(sliderName);
  sliderObject.addValueChangedHandler(function () {
    observable.set(property, sliderObject.getValue());
  });
  observable.addObserver(property, observable, function (sender, key, value, rev) {
    sliderObject.setValue(sender.get(key));
  });
}
