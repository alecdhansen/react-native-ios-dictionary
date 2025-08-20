#import "RNIOSDictionary.h"
#import <UIKit/UIKit.h>
#import <React/RCTUtils.h>
@implementation RNIOSDictionary
RCT_EXPORT_MODULE()
+(BOOL)requiresMainQueueSetup{return YES;}
RCT_EXPORT_METHOD(showDefinition:(NSString*)term resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
dispatch_async(dispatch_get_main_queue(),^{
UIReferenceLibraryViewController*d=[[UIReferenceLibraryViewController alloc]initWithTerm:term];
if(d){UIViewController*r=RCTPresentedViewController();
if(r){[r presentViewController:d animated:YES completion:^{resolve(@{@"success":@(YES),@"term":term});}];}
else{reject(@"no_view",@"No root view controller",nil);}}
else{reject(@"unavailable",@"Dictionary not available",nil);}});}
RCT_EXPORT_METHOD(checkIfTermExists:(NSString*)term resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
BOOL h=[UIReferenceLibraryViewController dictionaryHasDefinitionForTerm:term];
resolve(@{@"exists":@(h),@"term":term});}
RCT_EXPORT_METHOD(isDictionaryAvailable:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
resolve(@([UIReferenceLibraryViewController dictionaryHasDefinitionForTerm:@"test"]));}
@end
