import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>GameConnect | Найди партнеров для онлайн-игр</title>
        <meta name="description" content="Найди друзей для совместной игры в любимые онлайн-игры" />
      </Head>
      
      <main className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white ${inter.className}`}>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Найди идеальных <br />сопартийцев
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Свяжись с игроками своего уровня, найдите общий язык и покоряйте игровые вселенные вместе
          </p>
          
          {/* Search Component */}
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-1 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-1">
              <input 
                type="text" 
                placeholder="Игра, никнейм, роль..."
                className="w-full bg-gray-700 sm:rounded-l-xl rounded-t-xl sm:rounded-t-none px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex flex-col sm:flex-row gap-1">
                <select className="w-full sm:w-auto bg-gray-700 text-white px-4 py-4 focus:outline-none">
                  <option>Все игры</option>
                  <option>Dota 2</option>
                  <option>CS:GO</option>
                  <option>Valorant</option>
                  <option>League of Legends</option>
                  <option>World of Warcraft</option>
                </select>
                <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-8 py-4 sm:rounded-r-xl rounded-b-xl sm:rounded-b-none font-medium transition-colors">
                  Найти
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Players Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Популярные игроки</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Фильтры
              </button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors flex items-center">
                <span>Сортировка</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Player Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">JohnDoe</h3>
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-white">4.8</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Dota 2</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Support</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">EU West</span>
                  </div>
                  <p className="text-gray-300 line-clamp-2">
                    Ищу партнера для калибровки в Dota 2. Играю на 4-5 позиции, могу играть агрессивно или пассивно под вашу игру.
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">$8</span>
                    <span className="text-gray-400"> / час</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                    Написать
                  </button>
                </div>
              </div>
            </div>
            
            {/* Player Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
                    AG
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ApexGamer</h3>
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-white">5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Apex Legends</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Fragger</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">NA East</span>
                  </div>
                  <p className="text-gray-300 line-clamp-2">
                    Профессиональный игрок в Apex Legends с опытом турнирных игр. Помогу пройти ранги или просто весело провести время.
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">$15</span>
                    <span className="text-gray-400"> / час</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    Написать
                  </button>
                </div>
              </div>
            </div>
            
            {/* Player Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-green-500/20 transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold">
                    MW
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">MythicWoW</h3>
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-white">4.9</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">WoW</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tank</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">EU</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">M+20</span>
                  </div>
                  <p className="text-gray-300 line-clamp-2">
                    Опытный танк в WoW, могу провести через любые мифик+ или рейды. Объясню механику, помогу собрать группу.
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">$12</span>
                    <span className="text-gray-400"> / час</span>
                  </div>
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                    Написать
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors inline-flex items-center">
              Показать еще
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>
        
        {/* Game Services Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Игровые услуги</h2>
          
          {/* Services Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center bg-gray-800 rounded-xl p-1">
              <input 
                type="text" 
                placeholder="Поиск услуг по игре..."
                className="flex-grow bg-gray-700 rounded-l-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-r-xl font-medium transition-colors">
                Поиск
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Dota 2</span>
                <span className="text-xl font-bold text-green-400">$25/час</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Буст MMR рейтинга</h3>
              <p className="text-gray-300 mb-4">Профессиональный подъем MMR на любых ролях. Гарантия качества и безопасности аккаунта.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold mr-2">RP</div>
                  <span>RatingPro</span>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  Заказать
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">CS:GO</span>
                <span className="text-xl font-bold text-green-400">$15/час</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Тренировка аима</h3>
              <p className="text-gray-300 mb-4">Индивидуальные тренировки по улучшению прицела. Работа над ошибками, практические советы.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-sm font-bold mr-2">AS</div>
                  <span>AimSensei</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  Заказать
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">WoW</span>
                <span className="text-xl font-bold text-green-400">$40/рейд</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Рейд под ключ</h3>
              <p className="text-gray-300 mb-4">Полное прохождение рейда с опытной гильдией. Гарантированный лут с боссов.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-sm font-bold mr-2">RG</div>
                  <span>RaidGuide</span>
                </div>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                  Заказать
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors inline-flex items-center">
              Показать все услуги
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готов найти идеального напарника?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Присоединяйся к тысячам игроков, которые уже нашли своих постоянных партнеров для игр
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Зарегистрироваться бесплатно
            </button>
          </div>
        </section>
      </main>
    </>
  )
}