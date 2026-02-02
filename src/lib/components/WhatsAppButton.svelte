<script>
  const whatsappNumber = '27714843047';
  const message = encodeURIComponent("Hello, I'd like to enquire about your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
</script>

<a 
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  class="whatsapp-float"
  aria-label="Chat on WhatsApp"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.737 5.607 2.137 8.062L.262 31.738l7.894-2.067A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.544 0-5.037-.728-7.167-2.104l-.514-.332-5.332 1.397 1.422-5.193-.365-.533A13.27 13.27 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
    <path d="M12.165 9.421c-.267-.593-.548-.605-.802-.615-.208-.008-.445-.008-.683-.008s-.623.088-.95.445c-.327.356-1.247 1.218-1.247 2.97s1.277 3.445 1.455 3.683c.178.238 2.455 3.95 6.06 5.407 2.998 1.211 3.605.97 4.255.91.65-.06 2.098-.857 2.395-1.685.297-.828.297-1.54.208-1.685-.088-.148-.327-.238-.683-.416-.356-.178-2.098-1.04-2.425-1.158-.327-.119-.564-.178-.802.178-.238.356-.92 1.158-1.128 1.396-.208.238-.416.267-.772.089-.356-.178-1.501-.554-2.86-1.766-1.058-.942-1.772-2.107-1.98-2.463-.208-.356-.022-.549.157-.727.16-.16.356-.416.534-.624.178-.208.238-.356.356-.594.119-.238.06-.445-.03-.624-.089-.178-.802-1.93-1.099-2.643z"/>
  </svg>
</a>

<style>
  .whatsapp-float {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
    z-index: 1000;
    text-decoration: none;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  .whatsapp-float:active {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .whatsapp-float {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 56px;
      height: 56px;
    }
  }
</style>
