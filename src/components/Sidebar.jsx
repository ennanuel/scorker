import SidebarLeagues from './SidebarLeagues';
import Match from './Match'
import SidebarUpcoming from './SidebarUpcoming';

const Sidebar = () => {

    return (
        <article className="sidebar full-flex">
            <div className="widgets_container">
                <div className="widget full-flex match">
                    <h2 className="title">Featured Match</h2>
                    <Match />
                </div>
                <div className="widget full-flex upcoming_matches">  
                    <h2 className="title">Upcoming Matches</h2>
                    <SidebarUpcoming />
                </div>
                <div className="widget full-flex top_leagues">  
                    <h2 className="title">Top Leagues</h2>
                    <SidebarLeagues />
                </div>
            </div>
        </article>
  )
}

export default Sidebar
