<div className="wheel-container max-lg:max-h-[90vh] lg:mt-96 z-50 hover:cursor-pointer -mt-12 lg:pt-12">
  <div
    className="header border border-pink-400 w-full absolute max-lg:px-3 -top-11 left-0 pt-12"
    ref={headerRef}
  >
    <div
      className={`p-4 px-4 max-lg:mb-10 ${
        isDark
          ? "bg-white/10 shadow-lg rounded-lg backdrop-blur-sm border-white/10 border"
          : ""
      }`}
    >
      <p className="font-roboto max-lg:text-[18px] text-[24px] font-bold">
        What else?
      </p>
      <p className="font-roboto max-lg:text-[14px]">
        Lets collaborate, discuss potential opportunities, or connect with me.
      </p>
      <p className="font-roboto">You can find me on:</p>
    </div>
    <div className="flex mt-2 border-3 border-blue-400 w-full gap-2 flex-wrap justify-start items-start lg:hidden">
      <SocialLink
        href="mailto:nadialovely1803@gmail.com"
        icon="/images/socialmedia/2.png"
        alt="Gmail"
        label="nadialovely1803@gmail.com"
      />
      <SocialLink
        href="https://github.com/nadialvy"
        icon="/images/socialmedia/1.png"
        alt="GitHub"
        label="nadialvy"
      />
      <SocialLink
        href="https://www.linkedin.com/in/nadia-lovely"
        icon="/images/socialmedia/4.png"
        alt="Linkedin"
        label="Nadia Lovely"
      />
      <SocialLink
        href="https://www.instagram.com/nadlvy_"
        icon="/images/socialmedia/3.png"
        alt="Instagram"
        label="nadlvy_"
      />

      <SocialLink
        href="https://medium.com/@daisythoughts"
        icon="/images/socialmedia/5.png"
        alt="Medium"
        label="daisythoughts"
      />
      <SocialLink
        href="https://drive.google.com/file/d/1PbbT4J18Y_tadeQpqiCKi2fR0oZgGXGB/view?usp=sharing"
        icon="/images/socialmedia/6.png"
        alt="CV"
        label="Access My CV"
      />
    </div>
  </div>
  {/* <div className="wheel z-50" ref={wheelRef}>
  {[...Array(11)].map((_, num) => (
    <div
      key={num}
      className="wheel__card"
      onClick={() => window.open(socialMediaLinks[num % 6], "_blank")}
    >
      <img
        src={`/images/socialmedia/${(num % 6) + 1}.png`}
        alt={`Card ${(num % 6) + 1}`}
      />
    </div>
  ))}
</div> */}
</div>;
