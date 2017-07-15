import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addTask: function(){
      var title = this.get('title');
      var date = this.get('date');
      var description = this.get('description');


      //Crear nueva tarea
      var newTask = this.store.createRecord('task', {
           title: title,
           description:description,
           date: new Date(date)
      });

      //Guardar en base de datos
      newTask.save();

      //Limpiar formulario
      this.setProperties({
        title: '',
        description: '',
        date: ''
      })
    }
  }
});
