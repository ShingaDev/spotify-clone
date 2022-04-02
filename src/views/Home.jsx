import Section from "components/Section"

function Home() {

  const items = [
    {
      id: 1,
      title: 'Oysa herkes öldürür sevdiğini',
      description: 'Ebrar Beyza Uçar',
      image: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
      type: 'album'
    },
    {
      id: 2,
      title: 'Senin Biyolojin',
      description: 'Senin Biyolojin',
      image: 'https://i.scdn.co/image/ab67656300005f1f5decd8d305e01d2054274aee',
      type: 'artist'
    },
    {
      id: 3,
      title: 'Mutlu Mix',
      description: 'Relax and indulge with beautiful piano pieces',
      image: 'https://seed-mix-image.spotifycdn.com/v6/img/happy/4npEfmQ6YuiwW1GpUmaq3F/tr/default',
      type: 'album'
    },
    {
      id: 4,
      title: 'Oysa herkes öldürür sevdiğini',
      description: 'Ebrar Beyza Uçar',
      image: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
      type: 'album'
    },
    {
      id: 5,
      title: 'Oysa herkes öldürür sevdiğini',
      description: 'Ebrar Beyza Uçar',
      image: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
      type: 'album'
    }
  ]

  return (
    <div className="grid gap-y-8">
        <Section title="Recently played" 
        more="/blabla"
        items={items}
        />
        <Section title="Shows to try" 
        more="/blabla"
        items={items}
        />
        <Section title="Made For Shinga" 
        more="/blabla"
        items={items}
        />
    </div>
  )
}

export default Home