import validator from 'validator';


export const required = (value) => {
    if (!value.toString().trim().length){
        return (
            <div>
                값을 입력하세요
            </div>
        );
    }
};
export const validEmail = (value) => {
    if (!validator.isEmail(value)){
        return (
            <div>
                이메일 형식이 아닙니다.
            </div>
        );
    }
};
export const vusername = (value) => {
    if (value.length < 3 || value.length > 20){
        return (
            <div>
                아이디 값은 3 ~ 20 자리 이내로 입력하세요
            </div>
        );
    }
};
export const vpassword = (value) => {
    if (value.length < 4 || value.length > 20){
        return (
            <div>
                비밀번호 값은 4 ~ 20 자리 이내로 입력하세요
            </div>
        );
    }
};
export const vbirthday = (value) => {
  if (value.length < 5 || value.length > 7){
      return (
          <div>
                YY/MM/DD 형식으로 입력하세요
          </div>
      );
  }
};

// export default {
//     required,validEmail,vusername,vpassword,vbirthday,
// }