import Events from '../components/Events';

const EventsPage = () => {
  return (
    <>
      <title>EVENTS | Laska (not original)</title>
      <meta name="description" content="This is an educational website redesign of the laska.bar website, unrelated to the original brand" />
      
      <div className="container mx-auto py-6 md:py-8">
        <h1 className="text-primary uppercase font-orbitron font-semibold leading-[1.1] text-[2.5rem] md:text-[3.6rem] mb-6 md:mb-8">Events</h1>
        <Events />
      </div>
    </>
  )
}

export default EventsPage