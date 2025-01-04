"use client"
import React, { useState } from 'react';
import { 
  Layout, 
  Typography, 
  Button, 
  Row, 
  Col, 
  Card, 
  Carousel, 
  Space, 
  Steps,
  Tag
} from 'antd';
import Image from 'next/image';
import { 
  BookOutlined, 
  RestOutlined, 
  StarOutlined, 
  NotificationOutlined,
  SearchOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleOpenSignUp = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
  };

  const handleOpenLogin = () => {
    setShowSignUpModal(false);
    setShowLoginModal(true);
  };

  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Layout>
      {/* Header */}
      <Header 
        style={{ 
          background: 'linear-gradient(to right, #1890ff, #40a9ff)', 
          padding: '0 50px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
      >
        <div>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            TableEase
          </Title>
        </div>
        <Space>
          <Button 
            type="text" 
            style={{ color: 'white' }}
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </Button>
          <Button 
            type="primary" 
            ghost 
            style={{ color: 'white', borderColor: 'white' }}
            onClick={() => setShowSignUpModal(true)}
          >
            Sign Up
          </Button>
        </Space>
      </Header>

      {/* <Content style={{ padding: '50px' }}> */}
      <Content>
        {/* Hero Section */}
        <Row 
          align="middle" 
          justify="center" 
          style={{ 
            minHeight: '500px', 
            background: 'linear-gradient(to right, #e6f2ff, #ffffff)' 
          }}
        >
          <Col span={10}>
            <Title level={1} style={{ color: '#1890ff' }}>
              No Wait, Just Taste
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666' }}>
              Book your perfect dining experience in seconds. Discover, reserve, and enjoy without the hassle.
            </Paragraph>
            <Space>
              <Button 
                type="primary" 
                size="large" 
                icon={<BookOutlined />}
                onClick={() => setShowLoginModal(true)}
              >
                Reserve Your Table
              </Button>
            </Space>
          </Col>
          {/* <Col span={10}>
            <img 
              src="/dining-illustration.svg" 
              alt="Dining Illustration" 
              style={{ maxWidth: '100%' }} 
            />
          </Col> */}
          
          <Col xs={24} md={12}>
            <Carousel autoplay>
              <div>
                <div style={contentStyle}>
                  <Image 
                    src="/Dining-homepage/food1.jpg" 
                    alt="Dining Illustration 1" 
                    width={900} 
                    height={300}
                  />
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  <Image 
                    src="/Dining-homepage/food2.jpg" 
                    alt="Dining Illustration 2" 
                    width={900} 
                    height={300}
                  />
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  <Image 
                    src="/Dining-homepage/rest02.jpg" 
                    alt="Dining Illustration 3" 
                    width={900} 
                    height={300}
                  />
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>

        {/* Features Section */}
        <Row 
          justify="center" 
          style={{ 
            padding: '50px 0', 
            background: '#f0f2f5' 
          }}
        >
          <Col span={20}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
              Why Choose TableEase?
            </Title>
            <Row gutter={16}>
              <Col span={8}>
                <Card 
                  hoverable 
                  style={{ textAlign: 'center' }}
                  cover={<StarOutlined style={{ fontSize: '64px', color: '#1890ff', margin: '20px 0' }} />}
                >
                  <Card.Meta 
                    title="Instant Reservations" 
                    description="Secure your table with just a few taps" 
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card 
                  hoverable 
                  style={{ textAlign: 'center' }}
                  cover={<RestOutlined style={{ fontSize: '64px', color: '#1890ff', margin: '20px 0' }} />}
                >
                  <Card.Meta 
                    title="Explore Restaurants" 
                    description="Discover new cuisines and hidden gems" 
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card 
                  hoverable 
                  style={{ textAlign: 'center' }}
                  cover={<NotificationOutlined style={{ fontSize: '64px', color: '#1890ff', margin: '20px 0' }} />}
                >
                  <Card.Meta 
                    title="Stay Updated" 
                    description="Get real-time alerts and exclusive offers" 
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* How It Works */}
        <Row 
          justify="center" 
          style={{ 
            padding: '50px 0', 
            background: 'white' 
          }}
        >
          <Col span={20}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
              How It Works
            </Title>
            <Steps current={-1}>
              <Step 
                title="Find" 
                description="Search by cuisine, location, or restaurant name" 
                icon={<SearchOutlined />} 
              />
              <Step 
                title="Reserve" 
                description="Select time, guests, and confirm booking" 
                icon={<BookOutlined />} 
              />
              <Step 
                title="Enjoy" 
                description="Arrive at your reserved time and dine stress-free" 
                icon={<CheckCircleOutlined />} 
              />
            </Steps>
          </Col>
        </Row>

        {/* Special Offers */}
        <Row 
          justify="center" 
          style={{ 
            padding: '50px 0', 
            background: '#f0f2f5' 
          }}
        >
          <Col span={20}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
              Special Offers
            </Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Title level={4}>🥂 Weekend Exclusive</Title>
                  <Paragraph>Book a table on weekends and enjoy a complimentary drink</Paragraph>
                  <Tag color="blue">Limited Time Offer</Tag>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Title level={4}>🎉 Group Dining Discount</Title>
                  <Paragraph>Get 10% off for bookings of 6 or more guests</Paragraph>
                  <Tag color="green">Save Now</Tag>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Testimonials */}
        <Row 
          justify="center" 
          style={{ 
            padding: '50px 0', 
            background: 'white' 
          }}
        >
          <Col span={20}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
              What Our Customers Say
            </Title>
            <Carousel autoplay>
              <div>
                <Card>
                  <Paragraph italic>
                    "I've never had such a smooth dining experience. Booking a table was super easy, and we had the best time!"
                  </Paragraph>
                  <Text strong>- Priya R.</Text>
                </Card>
              </div>
              <div>
                <Card>
                  <Paragraph italic>
                    "The app helped us discover some hidden gems in our city. Love it!"
                  </Paragraph>
                  <Text strong>- John D.</Text>
                </Card>
              </div>
            </Carousel>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row 
          justify="center" 
          align="middle" 
          style={{ 
            padding: '50px 0', 
            background: '#1890ff', 
            color: 'white', 
            textAlign: 'center' 
          }}
        >
          <Col span={20}>
            <Title level={2} style={{ color: 'white' }}>
              Ready to Elevate Your Dining Experience?
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '18px' }}>
              Join thousands of happy diners. Sign up now and book your table today!
            </Paragraph>
            <Button 
              type="primary" 
              size="large" 
              style={{ 
                background: 'white', 
                color: '#1890ff', 
                fontWeight: 'bold' 
              }}
              onClick={() => setShowSignUpModal(true)}
            >
              Create Your Account
            </Button>
          </Col>
        </Row>
      </Content>

      {/* Login Modal */}
      <LoginModal 
        open={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSignUpClick={handleOpenSignUp}

        
      />

      {/* Sign Up Modal */}
      <SignUpModal 
        open={showSignUpModal} 
        onClose={() => setShowSignUpModal(false)}
        onLoginClick={handleOpenLogin}
      />
    </Layout>
  );
} 