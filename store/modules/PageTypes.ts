export interface Page {
    aboutIsActive: boolean
    workIsActive: boolean
    educationIsActive: boolean
    resumeIsActive: boolean
}

export class PageClass implements Page {
    aboutIsActive: boolean
    workIsActive: boolean
    educationIsActive: boolean
    resumeIsActive: boolean
  
    constructor(
        aboutIsActive: boolean, 
        workIsActive: boolean, 
        educationIsActive: boolean, 
        resumeIsActive: boolean) {
      this.aboutIsActive = aboutIsActive;
      this.workIsActive = workIsActive;
      this.educationIsActive = educationIsActive;
      this.resumeIsActive = resumeIsActive;
    }
}
  
export interface State {
    page: Page
}
