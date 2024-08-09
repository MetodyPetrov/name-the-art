import Link from "next/link";

export default function Home() {

  interface LinkInfo {
    title: string,
    to: string,
    color: string,
    hover: string
  }
  const navigation: LinkInfo[] = [ 
    { title: 'PLAY', to: "/play", color: 'bg-red-500', hover: 'hover:bg-red-600' },
    { title: 'LEADERBOARD', to: "/leaderboard", color: 'bg-yellow-400', hover: 'hover:bg-yellow-500' },
    { title: 'INSTRUCTIONS', to: "/rules", color: 'bg-slate-400', hover: 'hover:bg-slate-500' },
    { title: 'LOGIN', to: "/login", color: 'bg-blue-400', hover: 'hover:bg-blue-500' }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 bg-[rgb(254,250,224)]">
      <h1 className="font-bold text-8xl m-2 pointer-events-none select-none">Home</h1>
      <pre className="text-wrap">
        <br/>
        <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna metus, pharetra ac viverra eu, rutrum et tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tincidunt, dolor quis elementum scelerisque, lorem leo maximus magna, eget sagittis dui ante sit amet massa. Donec consequat nunc eget leo tempus sagittis vitae et nisi. Praesent fringilla lacus eget diam tristique, eget scelerisque sapien placerat. Sed sit amet elit quis velit hendrerit pharetra a id odio. Curabitur commodo turpis eu tempor vehicula. Integer vestibulum dolor in urna commodo dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac mollis dolor.</p>
        <br/>
        <p>   Aenean malesuada eget nisi ac rutrum. Nullam consequat ultrices elit id egestas. Curabitur dolor risus, porttitor sit amet neque a, laoreet sollicitudin lacus. Sed condimentum ullamcorper erat, id vestibulum enim lobortis id. Etiam dolor sem, placerat nec finibus quis, tristique sed ante. Vestibulum eu nunc malesuada, condimentum sapien at, semper nisl. Nullam sit amet felis cursus, sollicitudin velit non, suscipit nibh. Curabitur dictum cursus erat a tincidunt.</p>
        <br/>
        <p>   (Patch Notes...)</p>
        <p>   READ THE INSTRUCTIONS IF YOU HAVE NOT !!!</p>
      </pre>
      <div className="flex-grow"></div>
      <nav className="flex min-w-full justify-between">
        {
          navigation.map( (link: LinkInfo) => {
              return (
                <Link 
                  href={link.to}
                  key={link.to}
                  style={{ transition: 'all 0.4s' }}
                  className={`${link.hover} ${link.color} rounded-md p-5 font-bold text-5xl`}
                >{link.title}</Link>
              )
            }
          )
        }
      </nav>
    </main>
  );
}
