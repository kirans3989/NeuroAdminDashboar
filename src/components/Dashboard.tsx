import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Search,
  Bell,
  Upload,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Package,
  DollarSign,
  Star,
  Menu,
  X } from
'lucide-react';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems = [
  { name: 'Overview', icon: Package, active: true },
  { name: 'Products', icon: Package },
  { name: 'Campaigns', icon: Star },
  { name: 'Schedules', icon: Package },
  { name: 'Payouts', icon: DollarSign },
  { name: 'Statements', icon: Package },
  { name: 'Settings', icon: Package }];


  return (
    <div className="min-h-screen bg-gray-50" data-id="xcpj6ea67" data-path="src/components/Dashboard.tsx">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
      <div className="fixed inset-0 z-50 md:hidden" data-id="o5kchk75e" data-path="src/components/Dashboard.tsx">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} data-id="f69z56jev" data-path="src/components/Dashboard.tsx" />
          <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-600 via-blue-700 to-purple-800" data-id="nlhp093yr" data-path="src/components/Dashboard.tsx">
            <div className="p-6" data-id="v6mds5k0i" data-path="src/components/Dashboard.tsx">
              <div className="flex items-center justify-between mb-6" data-id="76lk9b3b0" data-path="src/components/Dashboard.tsx">
                <div className="flex items-center space-x-2" data-id="x24qnja44" data-path="src/components/Dashboard.tsx">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center" data-id="vxo1y5mhj" data-path="src/components/Dashboard.tsx">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded" data-id="10d2rjg4z" data-path="src/components/Dashboard.tsx"></div>
                  </div>
                  <span className="text-white font-bold text-xl" data-id="r82jfclf1" data-path="src/components/Dashboard.tsx">Neuro.</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} data-id="ez5mfnnfs" data-path="src/components/Dashboard.tsx">
                  <X className="w-6 h-6 text-white" data-id="hp276e7fl" data-path="src/components/Dashboard.tsx" />
                </button>
              </div>
              <p className="text-blue-200 text-sm font-medium mb-4" data-id="nqfowhygx" data-path="src/components/Dashboard.tsx">Admin Tools</p>
              <nav className="space-y-2" data-id="3swy3dmj0" data-path="src/components/Dashboard.tsx">
                {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeItem === item.name ?
                    'bg-white/20 text-white' :
                    'text-blue-100 hover:bg-white/10'}`
                    } data-id="l33hmfxzr" data-path="src/components/Dashboard.tsx">

                      <Icon className="w-5 h-5" data-id="lns08n0xe" data-path="src/components/Dashboard.tsx" />
                      <span data-id="vste72sso" data-path="src/components/Dashboard.tsx">{item.name}</span>
                    </button>);

              })}
              </nav>
            </div>
          </div>
        </div>
      }

      {/* Desktop Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-600 via-blue-700 to-purple-800 hidden md:block" data-id="inkjng1af" data-path="src/components/Dashboard.tsx">
        {/* Logo */}
        <div className="p-6" data-id="h90byvml1" data-path="src/components/Dashboard.tsx">
          <div className="flex items-center space-x-2" data-id="5o9bxsuy8" data-path="src/components/Dashboard.tsx">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center" data-id="m8pzzxzfs" data-path="src/components/Dashboard.tsx">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded" data-id="5yyoxus0s" data-path="src/components/Dashboard.tsx"></div>
            </div>
            <span className="text-white font-bold text-xl" data-id="ux9ckji7h" data-path="src/components/Dashboard.tsx">Neuro.</span>
          </div>
        </div>

        {/* Admin Tools */}
        <div className="px-6 mb-6" data-id="7bpomqr5s" data-path="src/components/Dashboard.tsx">
          <p className="text-blue-200 text-sm font-medium mb-4" data-id="23wnbx312" data-path="src/components/Dashboard.tsx">Admin Tools</p>
          <nav className="space-y-2" data-id="n510s9cgi" data-path="src/components/Dashboard.tsx">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeItem === item.name ?
                  'bg-white/20 text-white' :
                  'text-blue-100 hover:bg-white/10'}`
                  } data-id="rq93ntb6p" data-path="src/components/Dashboard.tsx">

                  <Icon className="w-5 h-5" data-id="xly6bu0zn" data-path="src/components/Dashboard.tsx" />
                  <span data-id="o91ige1hh" data-path="src/components/Dashboard.tsx">{item.name}</span>
                </button>);

            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 min-h-screen" data-id="ebmmc734u" data-path="src/components/Dashboard.tsx">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6" data-id="gjyoom1y7" data-path="src/components/Dashboard.tsx">
          <div className="flex items-center justify-between" data-id="ve7b7mp8k" data-path="src/components/Dashboard.tsx">
            <div className="flex items-center space-x-4" data-id="z80w65ty1" data-path="src/components/Dashboard.tsx">
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-id="ttdudv65y" data-path="src/components/Dashboard.tsx">

                <Menu className="w-6 h-6" data-id="cqy0cdkar" data-path="src/components/Dashboard.tsx" />
              </button>
              <div data-id="kd9hgerdo" data-path="src/components/Dashboard.tsx">
                <p className="text-gray-500 text-sm" data-id="x0q00iydi" data-path="src/components/Dashboard.tsx">Welcome Back,</p>
                <h1 className="text-2xl font-bold text-gray-900" data-id="aeve75iy2" data-path="src/components/Dashboard.tsx">Lucy Lure</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4" data-id="ghe7y6kcg" data-path="src/components/Dashboard.tsx">
              <div className="relative hidden sm:block" data-id="tz884duta" data-path="src/components/Dashboard.tsx">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-id="gv764n4d8" data-path="src/components/Dashboard.tsx" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-32 md:w-64 bg-gray-50 border-0" data-id="o61hkk8am" data-path="src/components/Dashboard.tsx" />

              </div>
              <div className="relative" data-id="wmw20ey90" data-path="src/components/Dashboard.tsx">
                <Bell className="w-6 h-6 text-gray-600" data-id="zb4ksc18k" data-path="src/components/Dashboard.tsx" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center" data-id="tcdtp6fgd" data-path="src/components/Dashboard.tsx">
                  2
                </Badge>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 hidden sm:flex" data-id="67kx7yaft" data-path="src/components/Dashboard.tsx">
                <Upload className="w-4 h-4 mr-2" data-id="zjlyn4rm7" data-path="src/components/Dashboard.tsx" />
                Upload Product
              </Button>
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700 sm:hidden" data-id="mkwr05aa0" data-path="src/components/Dashboard.tsx">
                <Upload className="w-4 h-4" data-id="p5l19g20e" data-path="src/components/Dashboard.tsx" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6" data-id="j00iykm9b" data-path="src/components/Dashboard.tsx">
          {/* Promotional Banner */}
          <Card className="bg-gradient-to-r from-cyan-400 to-cyan-500 border-0 text-white" data-id="60h696k05" data-path="src/components/Dashboard.tsx">
            <CardContent className="p-6" data-id="yeb452he1" data-path="src/components/Dashboard.tsx">
              <div className="flex items-center justify-between" data-id="m445r98sl" data-path="src/components/Dashboard.tsx">
                <div data-id="pwpabkrs7" data-path="src/components/Dashboard.tsx">
                  <h2 className="text-2xl font-bold mb-2" data-id="o1rh0scwc" data-path="src/components/Dashboard.tsx">Want some EXTRA Money?</h2>
                  <p className="text-cyan-100 mb-4" data-id="2nwr71hsr" data-path="src/components/Dashboard.tsx">Refer a friend and earn 10% commission on every referral</p>
                  <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100" data-id="n56c3lkgv" data-path="src/components/Dashboard.tsx">
                    Referral Program
                  </Button>
                </div>
                <div className="flex-shrink-0 ml-6" data-id="11no6lqt9" data-path="src/components/Dashboard.tsx">
                  <div className="w-32 h-24 bg-white/20 rounded-lg flex items-center justify-center" data-id="2yy99yyqo" data-path="src/components/Dashboard.tsx">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center" data-id="1fus7tg4z" data-path="src/components/Dashboard.tsx">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold" data-id="9jod18xsl" data-path="src/components/Dashboard.tsx">
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="21vafkbj0" data-path="src/components/Dashboard.tsx">
            {/* Total Products */}
            <Card data-id="39ebo9z19" data-path="src/components/Dashboard.tsx">
              <CardContent className="p-6" data-id="i1hdor8h9" data-path="src/components/Dashboard.tsx">
                <div className="flex items-center justify-between mb-4" data-id="kgqh41v88" data-path="src/components/Dashboard.tsx">
                  <div className="flex items-center space-x-2" data-id="8ty66x0cf" data-path="src/components/Dashboard.tsx">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center" data-id="y1yzb6iyn" data-path="src/components/Dashboard.tsx">
                      <Package className="w-4 h-4 text-blue-600" data-id="mjkx7271f" data-path="src/components/Dashboard.tsx" />
                    </div>
                    <span className="text-gray-600 font-medium" data-id="3ugng9l72" data-path="src/components/Dashboard.tsx">Total Product</span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" data-id="e6lk4qozi" data-path="src/components/Dashboard.tsx" />
                </div>
                <div className="space-y-2" data-id="x82eu9c3w" data-path="src/components/Dashboard.tsx">
                  <h3 className="text-3xl font-bold text-gray-900" data-id="ai78dmt54" data-path="src/components/Dashboard.tsx">1134</h3>
                  <p className="text-sm text-gray-500" data-id="en827wtvr" data-path="src/components/Dashboard.tsx">Items</p>
                  <div className="flex items-center space-x-1" data-id="uwkggtrf1" data-path="src/components/Dashboard.tsx">
                    <TrendingUp className="w-4 h-4 text-green-500" data-id="zw7a3wypb" data-path="src/components/Dashboard.tsx" />
                    <span className="text-green-500 text-sm font-medium" data-id="3wpsxt18k" data-path="src/components/Dashboard.tsx">+10% this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Earning */}
            <Card data-id="zjx240vf0" data-path="src/components/Dashboard.tsx">
              <CardContent className="p-6" data-id="tafgj6b3g" data-path="src/components/Dashboard.tsx">
                <div className="flex items-center justify-between mb-4" data-id="tpl28qlq6" data-path="src/components/Dashboard.tsx">
                  <div className="flex items-center space-x-2" data-id="vfbuo238t" data-path="src/components/Dashboard.tsx">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center" data-id="yk6xv7xvh" data-path="src/components/Dashboard.tsx">
                      <DollarSign className="w-4 h-4 text-green-600" data-id="rcxch52d3" data-path="src/components/Dashboard.tsx" />
                    </div>
                    <span className="text-gray-600 font-medium" data-id="v6lfwvtu5" data-path="src/components/Dashboard.tsx">Total Earning</span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" data-id="5qqrg2hkc" data-path="src/components/Dashboard.tsx" />
                </div>
                <div className="space-y-2" data-id="hao8hoq9k" data-path="src/components/Dashboard.tsx">
                  <h3 className="text-3xl font-bold text-gray-900" data-id="nap250hk4" data-path="src/components/Dashboard.tsx">$4,231</h3>
                  <div className="flex items-center space-x-1" data-id="bv5da92nr" data-path="src/components/Dashboard.tsx">
                    <TrendingDown className="w-4 h-4 text-red-500" data-id="n39fy35kj" data-path="src/components/Dashboard.tsx" />
                    <span className="text-red-500 text-sm font-medium" data-id="vp8hsgfy1" data-path="src/components/Dashboard.tsx">-22% this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card data-id="ijnyi15ux" data-path="src/components/Dashboard.tsx">
              <CardContent className="p-6" data-id="4398qys94" data-path="src/components/Dashboard.tsx">
                <div className="flex items-center justify-between mb-4" data-id="r7wt8lmur" data-path="src/components/Dashboard.tsx">
                  <div className="flex items-center space-x-2" data-id="v90999426" data-path="src/components/Dashboard.tsx">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center" data-id="vtnzngagw" data-path="src/components/Dashboard.tsx">
                      <Star className="w-4 h-4 text-purple-600" data-id="3mh1y2scd" data-path="src/components/Dashboard.tsx" />
                    </div>
                    <span className="text-gray-600 font-medium" data-id="kqox55nmn" data-path="src/components/Dashboard.tsx">Top Products</span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" data-id="0kjoqu2wr" data-path="src/components/Dashboard.tsx" />
                </div>
                <div className="flex items-center space-x-3" data-id="3y1146p40" data-path="src/components/Dashboard.tsx">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center" data-id="4x0d6q699" data-path="src/components/Dashboard.tsx">
                    <Package className="w-6 h-6 text-gray-600" data-id="urpp5kzuu" data-path="src/components/Dashboard.tsx" />
                  </div>
                  <div className="flex-1" data-id="4p71356lr" data-path="src/components/Dashboard.tsx">
                    <h4 className="font-medium text-gray-900" data-id="adt7clgy4" data-path="src/components/Dashboard.tsx">Niky - Icon 3D Pack</h4>
                    <p className="text-sm text-gray-500" data-id="l80ve7emg" data-path="src/components/Dashboard.tsx">3D Illustrations</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600" data-id="e67zcoqmg" data-path="src/components/Dashboard.tsx">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" data-id="nmn1viq0o" data-path="src/components/Dashboard.tsx">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" data-id="zzpbemilb" data-path="src/components/Dashboard.tsx" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>);

};

export default Dashboard;