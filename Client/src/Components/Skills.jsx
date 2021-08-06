import React from 'react';
import SkillsList from './SkillsList';
import css from './css/skills.css';

function Skills() {
  const frontEnd = [
    {
      name: 'CSS 3',
      image: 'https://www.pinclipart.com/picdir/middle/495-4955744_css-logo-png-css-logo-black-and-white.png',
    },
    {
      name: 'CSS Stylized Components',
      image: 'https://www.pinclipart.com/picdir/middle/495-4955744_css-logo-png-css-logo-black-and-white.png',
    },
    {
      name: 'HTML 5',
      image: 'https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png',
    },
    {
      name: 'Javascript',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaDwMXCAs7jDTjs4SqVzXV8SxPXGuwDXRZQ&usqp=CAU',
    },
    {
      name: 'Jquery',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjNUcWh2uEKZvqFK_oRHiUnqI2UR5NAJ1-7nNhPhNsK1tTngnl9kgqdHM60hN7vSp6Sw&usqp=CAU',
    },
    {
      name: 'React',
      image: 'https://img.favpng.com/1/17/24/react-logo-png-favpng-m00s95CAF5ngxbSc2NfvnypRP.jpg',
    },
  ];

  const backEnd = [
    {
      name: 'Node.js',
      image: 'https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png',
    },
    {
      name: 'Express',
      image: 'https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png',
    },
    {
      name: 'MySQL',
      image: 'https://i.pinimg.com/originals/15/d2/c0/15d2c05ad16652399213839f7cef8b2c.png',
    },
    {
      name: 'PostgreSQL',
      image: 'https://w7.pngwing.com/pngs/89/118/png-transparent-computer-icons-postgresql-database-others-logo-head-silhouette-thumbnail.png',
    },
    {
      name: 'MongoDB',
      image: 'https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png',
    },
    {
      name: 'Mongoose',
      image: 'https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png',
    },
    {
      name: 'Firebase',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png',
    },
    {
      name: 'REST APIs',
      image: 'https://e7.pngegg.com/pngimages/592/502/png-clipart-logo-application-programming-interface-computer-programming-application-software-api-text-photography-thumbnail.png',
    },
  ];

  const development = [
    {
      name: 'AWS - EC2',
      image: 'https://image.pngaaa.com/384/3822384-middle.png',
    },
    {
      name: 'Babel',
      image: 'https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png',
    },
    {
      name: 'CircleCI',
      image: 'https://ik.imagekit.io/himalayas/circleci_logo_3BaLF_gXd.png',
    },
    {
      name: 'Docker',
      image: 'https://toppng.com/uploads/preview/docker-logo-116093594376yxkrwzocu.png',
    },
    {
      name: 'Git',
      image: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png',
    },
    {
      name: 'Github',
      image: 'https://image.flaticon.com/icons/png/512/25/25231.png',
    },
    {
      name: 'npm',
      image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHKpwh4KyVNbw/company-logo_200_200/0/1538595735539?e=2159024400&v=beta&t=C1vNfTjbX0-CEzMNgcBIbyisA-wBlpaWT8Qbu23rzo8',
    },
    {
      name: 'Postman',
      image: 'https://iconape.com/wp-content/png_logo_vector/cib-postman.png',
    },
    {
      name: 'VS Code',
      image: 'https://cdn.iconscout.com/icon/free/png-256/vs-code-2336946-1982827.png',
    },
    {
      name: 'Webpack',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADV1dVvb2/n5+eOjo7d3d17e3tra2vMzMz7+/v8/Pz39/fy8vLr6+vExMS0tLQzMzOoqKi6urqbm5vKyspmZmbT09NSUlKEhIRbW1t4eHjh4eGMjIyhoaEtLS0lJSVJSUkeHh4UFBQ7OztfX19KSkoZGRlCQkIwMDALCwuVlZUoKCjRR4w4AAAKk0lEQVR4nO2deVcqPQyHDYKyCorIIquKIvj9P9/LZZ2ke9OZDu/p75/rORedPkDbJE2Tu7ukpKSkpKSkpKSkpKSkpGI1qB3/rYzbcQeSk6prqB9/qsDPS9yx5KHOGADujz9X9j9+NOKOJ7RacwBMCLB+iDumoOo+g0gI8NiJO6xgehidiCghwGvckYXR0/2FRyQE6MYdHV/tXYZGRgijYdwRMtX7ABMhQP0p7iAZGn5hFAUhwKwZd6Cemr5RECUhQC/uWH102OHtCWFza0vOiwRCSwgwqcYdspO6H1IGPeENWQDXHd6REGB+C0vO07ty/GZCeO7HHb2FXtWjtyHcLznlNsh7n7rBWxHuX1XeJaex0Q/dkhCgVs4YQFXc4X0J4aOEFkBbtsN7EwIsShYDaMl3eAYhwHoalwnp7MMHJQQYl8UCmCp3eCbh3gKIS3ZUR7PDswnhI7pB3tTu8HxCgFElKmB/6TJYL8L9b8WLAVRMO3wYQoBdKwqfxQ4fihA+I1gAnZnzMBmEAKtBwYAvehM7POHeAijSIB+4LTBhCAu0AB4mniPkEgK8FLHkPD16j+98fjj0/wtf+VsATjs81e70JnH+xijfGEDfa4E5KeMszDl/5z0/C2C4Yoxrgxy+To3xp2CXTwwge0zmrA8hhlbl/LllDhZAy8aHV0rqBanjqhb6Cn0o1+PwKZNLuq6GbVZvIWMAXXpM5qI6skWaeCnsKeL/VpqFsgCq3jv8XitM1F/APRqXm4NJtA2SluPiwwv6xfby8BjPwQeiTc4M58cAmnPG4//wivdwdbdeEOOUs6xOeBbA/kvlr1eEgU9sfvHuUflmPIdhAVRWjOdiR6C5o/+/wct9l/Ve+vE9rRnPfMPOnDRgPMHLveFUR6utlwVQrXs/kOTI9FUB40f0/WoLn7O1fG0c50jTUX94fdN+12vopb6e2av/0XHvx/lpn3iPqpq+644vl+ietfGLK4RBNfR2diw+lF/8kbs6MN/siLHTdMQTq7nbWv0WnbYOy2qYg8ah5ckSjLwXxzXe0uzO6vbaeU/AKo4yW8UOV/jr0nWLx+Hts2UVja2j36k4GalVeEazo210yamR4u77Ycddl7Ry1AoHDR5h5kZIN2TDIocNTT//fYk/hAftE8keP9/SnceCcL9uoHe1oZ6O2FmwOtKXaoGXVesnHmeEByHdrBTTEVu+bVa8kZwW9n6lr8I24fTkv3oRkgis7DiGeC89z4D/RSQkMBc3nC/kdF7TPP0IaVJklawgzzgphBV4OQuHdYR3lXyvru+ALyF94iDzxSH7LSt4lhX2hp6yNscYTcDBX+a//AlpjvL5bdvO0aZZ5YQ7iMhbVzlHivD6TvKsOYSwkXz18R7tdWKqETmCGfyL9mELtk2fyCKkdtV0Q1zcVzsL1EXUBtzisLIYwWUSahMG+8HxDtJcxJBtlWxCpR0/CLGAylWTu35yf4dPuDcFJYcFU0682Kit5MSjpTCSQxDurQnyxWGdIFnph35zlFMiDOF+r0LTsc85d7DTG/qmDtVTIhQhiWSzzh0shIMU2jPMYIRAHLEn/6ijUVvsdU61Lw5I+E5e/bAKCJXVjj5I++qAhI/C69kehUxiTmJEQqZXKNNGsjMVTTjFi4B7qqJOaDlrdeMQDoh3zzqqIoNFXksf1nEIG/sfsQPFOpW/Clv1/1ynejxCEkU0Rx3NwmGD4yF7TELq5bBOHf8JBylOh+xxCakvbLzfpdMM2YSXg+HYhDTr48XXHcYXgTIh4eiE+8mDwhx+MeElmoDN7MFcCQiF6ejsNRJPEB8/lYKQJmE5ZoqNtb9cEkJ6wG19Cki/AOIpUFkI6V7Wtkw8WKIooSwLrDyE9FaETRDHGCUsGSGNOhovX46RbauI25WLkMSOWtrcP5ycqfRPSkZIU5TbygMNnFvUVB8MlI6QRh0Vh1L4iKmnsYRKSEgTQfp/wguwc9nQ5l+WkhB+kF/VImGOLzQBO4Z4XTkJ9xQozNHJxDqXiN6cWlZWQhouuyTZ4FxCi8vE5SWkq8nh3pQC+1YJ4QftCK2a+qt7q4S6+3TWNwFKTqgscWWfZll6QunVLvtyGjdBKFxucbuKcwuEOD1Mb46Lug3CTKTCtp7NRbdC6H9bPREelAgTYUaJUKlEqFQiPCgRJsKMEqFSiVCpRHhQIkyEGSVCpRKhUonwoESYCDNKhEolQqXe4hDqb7DI5E04i0N4d+da2sWT8Pt84lEY4fVWkE39mYy8CDM3ggsjHGdeKelbpZYHIapzXdTNLlIlxaGalDshKUCjLXAYilDSI836sMyVUHI6PlCnHochVLTVeLGrmOVG+CbPcFCmHocgXCgLo3esllUXQtndtdOzFDcBAhCSNG48R2wO5u0JSc234TtOPZYmObAJcQGQxpdQz19fFMiFkKTEH9brmvEmAJOQ1FQ67RG0esUqCCGGOX8pccEDSe8eFiHJFckk85KiQH3thSArQnI5NjPB8dQUpgWHUJtNX7evAWJBSEsW4f8l9UfwdPQnfDRdTZvZ1nExEuIqMbLZhmue9bN1pHwJcd6d/Mo/rcWjSjg0EC4VdXc0L8rm/vkRkgmo3PVoPSV51raeEM8F9c1p3D/wmr/pRUjyX3XLCK2JJbOudISG+lf470hvAngQvrsl805IrTUxuVlNiHsetowli3Aede/Pi3DjnsyL31uxKIiKkNQg7YlXFwQt+sKjHAn1dwmUwvd46V1SOSGxdgeWnsqK3mdwqww5c82mvwi3gpmiixQywj+XepBYZBvzL0Hv2DmHtIMdZqavhPDVsaYnkqzGkrvU97KUosXIL5UWBEL8KTTd6xUs2HX1LZtTUpFi5GcHmRCuLcqaGzXitblwTua9SFqMHBGO8AbqX8Kf0ejKJZteFK5PcihGniEkLm5jxXmU93TkVrnCltx0cj5+qAh1ynk1374ZDSAcI75U5IManPbkyljTF8JZ3DZeLvuTRCNjSx9Gv4B/CtGIZcDpPCH0gaCyjEOqFKidnt8ybjMKx7LmVOtg/cmEYqiOepUXBh3yqvKugja2ZlaAlHXYYPXPkVSMZMuzncdZz2TF8y9rfpR/zwCNHJv/UmV3Le5Oy2vaoRZ7XOdllVmEcJJjm2dOi06AjE3DUN6tulm2KrvTKhTSbp3RSI9PqGw0GFZ+7Y4DECrOTHOQbwF2HuEi6A5vkl8tTw5h+B3eJH25leCEuezwJrnX8vQmvC+y63hG1nFiJuGmsAVGlGMLTy/CX6GVcLFyChf7EM6LaKeuV9fiHMWbMJAPz5V1DMCVcBJpgRFl6+y5EW6UGVgxNLUqru9C6NdaNE8NLUJyDoSSFMj4Mvu11oR5+fBcGeuuWRKaw8jxZAjQWxHm7cNzpe11YUPo2Z+5SGliAGbCx2J8eKbURaBMhMw+6QVKlaesJyzWh+dKXrFcRxjimKxYyWoeawg1Xd3KK7HjsZKwXhoT202CBaAg/MoxSp+3SL6flHAZ2YfnCuVsyggZve3LomvSl4TwvaQmtqPmKkJmxlaJdI4BYEJuIky59PBGCT9vboc3qbFAhLNb3OFN6m1Pl86HQrPP/4vap51velMmdlJSUlJSUtIt6D8dt8cx7yQV6QAAAABJRU5ErkJggg==',
    },
  ];

  const testing = [
    {
      name: 'Jest',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png',
    },
    {
      name: 'K6',
      image: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/05/k6-logo.png',
    },
    {
      name: 'Loader.io',
      image: 'https://pbs.twimg.com/profile_images/545681171749666816/4-rbfATJ_400x400.png',
    },
    {
      name: 'Mocha',
      image: 'https://avatars.githubusercontent.com/u/8770005?s=200&v=4',
    },
    {
      name: 'Chai',
      image: 'https://avatars.githubusercontent.com/u/1515293?s=280&v=4',
    },
  ];

  return (
    <div id="techList" className={css.background}>
      <div className={css.title}>
        <h1>Tech Skills</h1>
      </div>
      <div className={css.container}>
        <div className={css.listStructure}>
          <div className={css.list}>
            <SkillsList list={development} name="Development" />
          </div>
          <div className={css.list}>
            <SkillsList list={frontEnd} name="Frontend" />
          </div>
          <div className={css.list}>
            <SkillsList list={backEnd} name="Backend" />
          </div>
          <div className={css.list}>
            <SkillsList list={testing} name="Testing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
