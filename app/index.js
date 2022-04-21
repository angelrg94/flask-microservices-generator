var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	async prompting() {
	    this.log('Welcome to the Pagerduty flask microservices generatorcl');
		this.answers = await this.prompt([
		  {
			type: "input",
			name: "name",
			message: "Your project name",
			default: "pd-projectname" 
		  }
		]); 
	  }
	  writing() {
		this.fs.copyTpl(
			this.templatePath('app'),
			this.destinationPath(this.answers.name+'/app'),
		  );
		this.fs.copyTpl(
			this.templatePath('test'),
			this.destinationPath(this.answers.name+'/test'),
		  );
		  this.fs.copyTpl(
			this.templatePath('requirements.txt'),
			this.destinationPath(this.answers.name+'/requirements.txt'),
		  );
		  this.fs.copyTpl(
			this.templatePath('README.MD'),
			this.destinationPath(this.answers.name+'/README.MD'),
		  );
		  this.fs.copyTpl(
			this.templatePath('MANIFEST.inc'),
			this.destinationPath(this.answers.name+'/MANIFEST.inc'),
		  );
		  this.fs.copyTpl(
			this.templatePath('LICENSE'),
			this.destinationPath(this.answers.name+'/LICENCE'),
		  );
		  this.fs.copyTpl(
			this.templatePath('setup.cfg'),
			this.destinationPath(this.answers.name+'/setup.cfg'),
		  );
	  }
};
