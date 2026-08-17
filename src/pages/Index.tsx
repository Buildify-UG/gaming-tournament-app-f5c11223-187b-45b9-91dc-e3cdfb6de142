import { useState } from 'react';
import { Trophy, Users, Gamepad2, Clock, ChevronRight, Medal, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Player {
  id: string;
  name: string;
  rank: number;
  wins: number;
  avatar: string;
  status: 'online' | 'offline' | 'playing';
}

interface Tournament {
  id: string;
  title: string;
  game: string;
  status: 'upcoming' | 'live' | 'completed';
  players: number;
  maxPlayers: number;
  prize: string;
  startTime: string;
  image: string;
}

export default function Index() {
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null);

  const tournaments: Tournament[] = [
    {
      id: '1',
      title: 'Pro League Championship',
      game: 'Counter-Strike 2',
      status: 'live',
      players: 32,
      maxPlayers: 32,
      prize: '$50,000',
      startTime: 'Now Live',
      image: 'https://images.unsplash.com/photo-1538481143235-a9e3e14e0a5e?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Valorant Clash',
      game: 'Valorant',
      status: 'upcoming',
      players: 24,
      maxPlayers: 32,
      prize: '$25,000',
      startTime: 'Tomorrow 6 PM',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'League of Legends Open',
      game: 'League of Legends',
      status: 'upcoming',
      players: 16,
      maxPlayers: 32,
      prize: '$15,000',
      startTime: 'Friday 8 PM',
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=400&fit=crop'
    }
  ];

  const topPlayers: Player[] = [
    { id: '1', name: 'ShadowKing', rank: 1, wins: 245, avatar: '👑', status: 'online' },
    { id: '2', name: 'NovaStrike', rank: 2, wins: 198, avatar: '⚡', status: 'playing' },
    { id: '3', name: 'PhantomGhost', rank: 3, wins: 187, avatar: '👻', status: 'online' },
    { id: '4', name: 'IceVenom', rank: 4, wins: 156, avatar: '❄️', status: 'offline' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">TourneyHub</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="text-slate-300 hover:text-white">Tournaments</Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white">Leaderboard</Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Join Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-600/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1538481143235-a9e3e14e0a5e?w=1200&h=400&fit=crop"
            alt="Hero"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20">
            <Badge className="bg-red-600 text-white mb-4 px-3 py-1">
              <Flame className="w-3 h-3 mr-1" />
              LIVE NOW
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-2">Pro League Championship</h2>
            <p className="text-xl text-slate-200 mb-6">32 Teams • $50,000 Prize Pool</p>
            <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-2 h-auto">
              Watch Live <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Active Tournaments</div>
            <div className="text-3xl font-bold text-white">12</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Total Players</div>
            <div className="text-3xl font-bold text-white">2.4K</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Prize Pool</div>
            <div className="text-3xl font-bold text-white">$250K</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 text-sm mb-2">Online Now</div>
            <div className="text-3xl font-bold text-orange-500">847</div>
          </Card>
        </div>

        {/* Tournaments Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-6 h-6 text-orange-500" />
              Featured Tournaments
            </h3>
            <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
              View All <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Card
                key={tournament.id}
                className={`bg-slate-800/50 border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all cursor-pointer group ${
                  selectedTournament === tournament.id ? 'border-orange-500 ring-2 ring-orange-500/20' : ''
                }`}
                onClick={() => setSelectedTournament(tournament.id)}
              >
                <div className="relative overflow-hidden h-32">
                  <img 
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <Badge 
                    className={`absolute top-3 right-3 ${
                      tournament.status === 'live' ? 'bg-red-600' :
                      tournament.status === 'upcoming' ? 'bg-blue-600' : 'bg-slate-600'
                    }`}
                  >
                    {tournament.status === 'live' ? '🔴 LIVE' :
                     tournament.status === 'upcoming' ? '⏰ UPCOMING' : '✓ COMPLETED'}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-white mb-1">{tournament.title}</h4>
                  <p className="text-sm text-slate-400 mb-4">{tournament.game}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Players
                      </span>
                      <span className="text-white font-semibold">{tournament.players}/{tournament.maxPlayers}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Prize Pool
                      </span>
                      <span className="text-orange-400 font-semibold">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Start Time
                      </span>
                      <span className="text-white font-semibold">{tournament.startTime}</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-700 rounded-full h-1 mb-3">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-1 rounded-full"
                      style={{ width: `${(tournament.players / tournament.maxPlayers) * 100}%` }}
                    ></div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                    {tournament.status === 'live' ? 'Watch Now' : 'Register'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Medal className="w-6 h-6 text-yellow-500" />
              Top Players
            </h3>
            <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
              Full Leaderboard <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <div className="divide-y divide-slate-700">
              {topPlayers.map((player) => (
                <div key={player.id} className="p-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 font-bold text-white text-sm">
                      {player.rank}
                    </div>
                    <div className="text-2xl">{player.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{player.name}</h4>
                      <p className="text-xs text-slate-400">
                        {player.status === 'online' ? '🟢 Online' :
                         player.status === 'playing' ? '🔴 Playing' : '⚫ Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">{player.wins} Wins</div>
                    <div className="text-xs text-slate-400">Tournament Champion</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
          <p>© 2024 TourneyHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
