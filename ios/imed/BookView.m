//
// Created by 卢杰文 on 2018/3/1.
// Copyright (c) 2018 卢杰文. All rights reserved.
//

#import "BookView.h"

@implementation BookView {

}

- (instancetype)initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        [self becomeFirstResponder];
        [self createMenu];
    }
    return self;
}


//构建UIMenuController
- (void)createMenu {
    _menu = [UIMenuController sharedMenuController];
    UIMenuItem *item0 = [[UIMenuItem alloc] initWithTitle:@"分享" action:@selector(share:)];
    UIMenuItem *item1 = [[UIMenuItem alloc] initWithTitle:@"笔记" action:@selector(thought:)];
    UIMenuItem *item2 = [[UIMenuItem alloc] initWithTitle:@"划线" action:@selector(line:)];
    UIMenuItem *item3 = [[UIMenuItem alloc] initWithTitle:@"复制" action:@selector(copy1:)];
    [_menu setMenuItems:@[item0, item1, item2, item3]];
}

- (BOOL)canPerformAction:(SEL)action withSender:(id)sender {
    if (action == @selector(share:) ||
            action == @selector(thought:) ||
            action == @selector(line:) ||
            action == @selector(copy1:)) {
        return YES;
    }
    return NO;
}

//UIWebView自带获取选中文字的方法
- (NSString *)getSelectedText {
//    return [self stringByEvaluatingJavaScriptFromString:@"window.getSelection().toString()"];
    //先复制到粘贴板 再打印粘贴板上的内容
    [self copy:_menu];
    return [UIPasteboard generalPasteboard].string;
}

@end
