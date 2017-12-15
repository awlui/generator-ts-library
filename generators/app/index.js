const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome. This module, ${chalk.blue('generator-ts-library')}, generates boilerplate intended for software library development w/ Typescript... Use Typescript. Its good for you.`)
    );
    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project Name:',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'generate',
        message: 'Would you like to create a new folder for the boilerplate?',
        default: true
      }
    ];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.generate = props.generate;
      this.projectName = props.projectName;
    });
  }
  writing() {
    let sourceDir = this.projectName;

    if (this.generate) {
      mkdirp(sourceDir, err => {
        if (err) {
          console.log(err);
          console.log('Try Again');
          return;
        }
        this.destinationRoot(sourceDir);
        genPackage.apply(this);
      });
    } else {
      genPackage.apply(this);
    }
  }
  end() {
    this.log(
      yosay(`Have Fun!`)
      )
  }
  method2() {
    this.log('method 2 just ran');
    return new Promise((resolve, reject) => {
      console.log('promise doing its thing')
      setTimeout(() => {
        resolve('done');
      }, 2000)
    })
  }
};

function genPackage() {
  this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.projectName
      }
    );
  this.fs.copy(
    this.templatePath('**/!(_package.json)'),
    this.destinationRoot()
    );
  this.fs.copy(
    this.templatePath('.*'),
    this.destinationRoot()
    );
}