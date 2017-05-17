module.exports = function(grunt) {
  grunt.initConfig({
    link_html: {
      your_target: {
        // Arquivos de origem com os pacotes
        //Arquivos com .js
        jsFiles: ['bower_components/angular/angular.js',
                  'bower_components/bootstrap/dist/js/bootstrap.min.js',
                  'bower_components/jquery/dist/jquery.min.js',
                  'bower_components/jquery-ui/jquery-ui.min.js'],
        //Arquivos com .CSS
        cssFiles: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
                  'bower_components/font-awesome/css/font-awesome.min.css'],
        //Alvo da inserção dos links
        targetHtml: ['*.html']  //neste caso, todos os arquivos .html da pasta
                                //atual serão afetados.
      },
    },
  });
  // Carregamento do plugin grunt-link-html
  grunt.loadNpmTasks('grunt-link-html');

  // Registro de uma tarefa padrão
  //todo a tarefa de link_html será executada no terminal
  //com o comando grunt default
  grunt.registerTask('default', ['link_html']);

};
