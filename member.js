 function skillsMember() {
    return {
        restrict: 'E' , 
        templateUrl: 'modules/skills/views/member.html' ,
        controller: 'SkillMemberController' ,
        controllerAs: 'vm' ,
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
 }