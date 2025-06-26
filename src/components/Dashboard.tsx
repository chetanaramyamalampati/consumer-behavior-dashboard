
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Users, TrendingUp, Target, Activity, Clock, Zap, Brain } from 'lucide-react';

// Mock data generators
const generateEngagementData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    data.push({
      hour: `${i}:00`,
      engagement: Math.floor(Math.random() * 100) + 20,
      posts: Math.floor(Math.random() * 50) + 10,
      comments: Math.floor(Math.random() * 200) + 50,
    });
  }
  return data;
};

const generateUserSegments = () => [
  { name: 'Power Users', value: 15, color: '#8B5CF6', retention: 92 },
  { name: 'Casual Browsers', value: 45, color: '#06B6D4', retention: 67 },
  { name: 'Content Creators', value: 20, color: '#10B981', retention: 85 },
  { name: 'New Users', value: 20, color: '#F59E0B', retention: 23 }
];

const generateABTestData = () => [
  { test: 'Feed Algorithm A', conversion: 24.5, sample: 5000, confidence: 95 },
  { test: 'Feed Algorithm B', conversion: 31.2, sample: 5000, confidence: 98 },
  { test: 'Story UI Variant A', conversion: 18.3, sample: 3000, confidence: 85 },
  { test: 'Story UI Variant B', conversion: 22.7, sample: 3000, confidence: 91 }
];

const Dashboard = () => {
  const [engagementData, setEngagementData] = useState(generateEngagementData());
  const [userSegments] = useState(generateUserSegments());
  const [abTests] = useState(generateABTestData());
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  useEffect(() => {
    const interval = setInterval(() => {
      setEngagementData(generateEngagementData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cohortData = [
    { week: 'Week 1', retained: 100, churned: 0 },
    { week: 'Week 2', retained: 78, churned: 22 },
    { week: 'Week 3', retained: 65, churned: 35 },
    { week: 'Week 4', retained: 58, churned: 42 },
    { week: 'Week 8', retained: 45, churned: 55 },
    { week: 'Week 12', retained: 38, churned: 62 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Consumer Behavior Dashboard</h1>
            <p className="text-slate-300">AI-powered insights for Gen Z engagement</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-green-600 text-white">
              <Activity className="w-4 h-4 mr-1" />
              Live Data
            </Badge>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800">
              <Brain className="w-4 h-4 mr-2" />
              Run AI Analysis
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Active Users</CardTitle>
                <Users className="w-4 h-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">24,567</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.5% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Engagement Rate</CardTitle>
                <Target className="w-4 h-4 text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">68.3%</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5.2% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Session Duration</CardTitle>
                <Clock className="w-4 h-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">14.2m</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.7% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Viral Coefficient</CardTitle>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">2.4x</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15.3% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="engagement" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="engagement" className="data-[state=active]:bg-purple-600">Real-time Engagement</TabsTrigger>
            <TabsTrigger value="segments" className="data-[state=active]:bg-purple-600">AI User Segments</TabsTrigger>
            <TabsTrigger value="retention" className="data-[state=active]:bg-purple-600">Retention Analysis</TabsTrigger>
            <TabsTrigger value="testing" className="data-[state=active]:bg-purple-600">A/B Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="engagement" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Real-time Engagement Patterns</CardTitle>
                <CardDescription className="text-slate-300">
                  Hourly engagement metrics with AI-detected anomalies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Line type="monotone" dataKey="engagement" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6' }} />
                    <Line type="monotone" dataKey="comments" stroke="#06B6D4" strokeWidth={2} dot={{ fill: '#06B6D4' }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">AI-Powered User Clustering</CardTitle>
                  <CardDescription className="text-slate-300">
                    Machine learning segmentation based on behavior patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={userSegments}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        dataKey="value"
                      >
                        {userSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F9FAFB'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Segment Performance</CardTitle>
                  <CardDescription className="text-slate-300">
                    Retention rates by AI-identified user segments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userSegments.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                          <span className="text-white text-sm font-medium">{segment.name}</span>
                        </div>
                        <span className="text-slate-300 text-sm">{segment.retention}%</span>
                      </div>
                      <Progress value={segment.retention} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="retention" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Cohort Retention Analysis</CardTitle>
                <CardDescription className="text-slate-300">
                  User retention patterns over time with predictive modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cohortData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Bar dataKey="retained" fill="#10B981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="churned" fill="#EF4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Active A/B Tests
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Statistical significance and performance comparison
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {abTests.map((test, index) => (
                    <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-medium">{test.test}</h4>
                          <p className="text-slate-300 text-sm">{test.sample.toLocaleString()} users</p>
                        </div>
                        <Badge variant={test.confidence >= 95 ? "default" : "secondary"} className={test.confidence >= 95 ? "bg-green-600" : "bg-yellow-600"}>
                          {test.confidence}% confident
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Conversion Rate</span>
                        <span className="text-white text-xl font-bold">{test.conversion}%</span>
                      </div>
                      <Progress value={test.conversion} className="mt-2 h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
