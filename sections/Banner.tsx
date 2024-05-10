interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  description?: string;
}

export default function Banner({
  name = 'Page Title',
  description = 'Page description',
}: Props) {
  return (
    <div class='w-full h-screen relative overflow-hidden'>
      <iframe
        class='w-[1920px] h-[1080px] lg:w-full lg:h-full absolute top-0 left-0 object-fill lg:object-cover object-center'
        width="150%"
        height="150%"
        src="https://www.youtube.com/embed/lYoNEHMUUM0?si=5onDrKGouFyjOQM3&amp;controls=0&amp;start=5&amp;autoplay=1&amp;mute=1&loop=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
      </iframe>
      <div class='p-10 flex flex-col gap-y-4 items-center justify-center w-full h-full absolute top-0 left-0 z-10 bg-zinc-800 text-zinc-100 text-center bg-zinc-900/60'>
        <div class="w-full flex items-center justify-center text-6xl font-bold" dangerouslySetInnerHTML={{
          __html: name,
        }} />

        <div class="w-full flex items-center justify-center text-xl" dangerouslySetInnerHTML={{
          __html: description,
        }} />

      </div>
      <div class='absolute bottom-10 right-10 z-10 p-4 bg-zinc-100 text-zinc-900 rounded-lg flex gap-4'>
        <div>imagem</div>
        <div class='flex flex-col gap-2'>
          <h2 class='text-xl font-bold'>Quer ajudar?</h2>
          <span class='text-sm'>Aponte para o QR Code e faça sua doação!</span>
        </div>
      </div>
    </div>
  )
}